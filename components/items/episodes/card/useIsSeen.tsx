import { ApolloError } from '@apollo/client';
import { Episode } from '@prisma/client';
import {
  useWatchlistsLazyQuery,
  WatchlistsDocument,
  WatchlistsQuery,
} from 'generated/graphql';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { useUpdateIsSeenEpisodeMutation } from '../../../../generated/graphql';

interface IIsSeenResp {
  isSeen: boolean;
  seenAt: string;
  loading: boolean;
  setIsSeen: () => void;
}

const checkIsSeenEpisode = (
  episodeId: Episode['id'],
  watchlist: WatchlistsQuery['watchlists'][number],
): {
  seen: boolean;
  seenAt: string;
} => {
  const episode = watchlist.episodeWatchlist?.episodes.find(
    (e) => e.episodeId === episodeId,
  );
  return {
    seen: episode?.seen || false,
    seenAt: episode?.seenAt || '',
  };
};

const useIsSeenEpisode = (
  episodeId: Episode['id'],
  options: {
    onSuccess?: () => void;
    onError?: (err: ApolloError | undefined) => void;
  },
): IIsSeenResp => {
  const [isSeen, setIsSeen] = useState<boolean>(false);
  const [seenAt, setSeenAt] = useState<string>('');
  const [session, loading] = useSession();
  const [wachlistId, setWatchlistId] = useState<number>(0);
  const { onSuccess, onError } = options;

  const [
    getDefaultWatchlist,
    { data: defaultWatchlist, loading: watchlistLoading },
  ] = useWatchlistsLazyQuery({
    variables: {
      where: {
        AND: [
          {
            default: {
              equals: true,
            },
          },
          {
            user: {
              is: {
                email: {
                  equals: session?.user?.email,
                },
              },
            },
          },
        ],
      },
    },
  });

  const [updateIsSeenEpisodeMutation, { loading: mutationLoading }] =
    useUpdateIsSeenEpisodeMutation({
      variables: {
        where: {
          episodeId_watchlistId: {
            episodeId: episodeId,
            watchlistId: wachlistId,
          },
        },
        data: {
          seen: {
            set: !isSeen,
          },
          seenAt: {
            set: !isSeen ? new Date().toISOString() : null,
          },
        },
      },
      onCompleted: () => {
        setIsSeen(!isSeen);
        onSuccess?.();
      },
      onError: (err) => {
        onError?.(err);
      },
      refetchQueries: [
        {
          query: WatchlistsDocument,
          variables: {
            where: {
              AND: [
                {
                  default: {
                    equals: true,
                  },
                },
                {
                  user: {
                    is: {
                      email: {
                        equals: session?.user?.email,
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

  useEffect(() => {
    if (session?.user?.email) {
      getDefaultWatchlist();
    }
  }, [getDefaultWatchlist, session?.user?.email]);

  useEffect(() => {
    if (defaultWatchlist) {
      setWatchlistId(defaultWatchlist.watchlists[0].id);

      const seenSerie = checkIsSeenEpisode(
        episodeId,
        defaultWatchlist.watchlists[0],
      );
      setIsSeen(seenSerie.seen);
      setSeenAt(seenSerie.seenAt);
    }
  }, [defaultWatchlist, episodeId]);

  return {
    isSeen,
    seenAt,
    loading: loading || watchlistLoading || mutationLoading,
    setIsSeen: () => updateIsSeenEpisodeMutation(),
  };
};

export default useIsSeenEpisode;
