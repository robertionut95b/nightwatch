import { ApolloError } from '@apollo/client';
import { Serie } from '@prisma/client';
import {
  useUpdateIsSeenSerieMutation,
  useWatchlistsLazyQuery,
  WatchlistsDocument,
  WatchlistsQuery,
} from 'generated/graphql';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

interface IIsSeenResp {
  isSeen: boolean;
  seenAt: string;
  loading: boolean;
  setIsSeen: () => void;
}

const checkIsSeenSerie = (
  serieId: Serie['id'],
  watchlist: WatchlistsQuery['watchlists'][number],
): {
  seen: boolean;
  seenAt: string;
} => {
  const serie = watchlist.seriesWatchlist?.series.find(
    (m) => m.serieId === serieId,
  );
  return {
    seen: serie?.seen || false,
    seenAt: serie?.seenAt || '',
  };
};

const useIsSeenSerie = (
  serieId: Serie['id'],
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

  const [updateIsSeenSerieMutation, { loading: mutationLoading }] =
    useUpdateIsSeenSerieMutation({
      variables: {
        where: {
          serieId_watchlistId: {
            serieId: serieId,
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
    if (defaultWatchlist) {
      setWatchlistId(defaultWatchlist.watchlists[0].id);

      const seenSerie = checkIsSeenSerie(
        serieId,
        defaultWatchlist.watchlists[0],
      );
      setIsSeen(seenSerie.seen);
      setSeenAt(seenSerie.seenAt);
    }
  }, [defaultWatchlist, serieId]);

  useEffect(() => {
    if (session?.user?.email) {
      getDefaultWatchlist();
    }
  }, [getDefaultWatchlist, session?.user?.email]);

  return {
    isSeen,
    seenAt,
    loading: loading || watchlistLoading || mutationLoading,
    setIsSeen: () => updateIsSeenSerieMutation(),
  };
};

export default useIsSeenSerie;
