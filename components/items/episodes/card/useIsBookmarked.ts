import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import {
  useWatchlistsLazyQuery,
  WatchlistsQuery,
  useAddEpisodeToWatchlistMutation,
  WatchlistsDocument,
  useRemoveEpisodeFromWatchlistMutation,
} from '../../../../generated/graphql';
import { ApolloError } from '@apollo/client';
import { Episode } from '@prisma/client';

interface IUseIsBookmarkedResults {
  isBookmarked: boolean;
  addToWatchlist: () => void;
  loading: boolean;
}

const checkIfBookmarked = (
  episodeId: number,
  watchlist: WatchlistsQuery['watchlists'][0],
): boolean => {
  return (
    watchlist?.episodeWatchlist?.episodes.find(
      (e) => e.episodeId === episodeId,
    ) !== undefined
  );
};

export const useIsBookmarked = (
  episodeId: Episode['id'],
  options: {
    onSuccess?: () => void;
    onError?: (err: ApolloError | undefined) => void;
  },
  defaultBookmarked?: boolean,
): IUseIsBookmarkedResults => {
  const { onSuccess, onError } = options;
  const [session, loading] = useSession();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(
    defaultBookmarked || false,
  );
  const [defaultWatchlist, setDefaultWatchlist] =
    useState<WatchlistsQuery['watchlists'][0]>();

  const [
    getDefaultWatchlist,
    { data: watchlistQueryData, loading: watchlistLoading },
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
    onCompleted: (data) => {
      setDefaultWatchlist(data.watchlists[0]);
    },
  });

  const [addEpisodeToWatchlistMutation, { loading: addLoading }] =
    useAddEpisodeToWatchlistMutation({
      variables: {
        episode: {
          connect: {
            id: episodeId,
          },
        },
        watchlist: {
          connectOrCreate: {
            create: {
              id: defaultWatchlist?.id || 0,
              watchlist: {
                connect: {
                  id: defaultWatchlist?.id || 0,
                },
              },
            },
            where: {
              id: defaultWatchlist?.id,
            },
          },
        },
      },
      onCompleted: () => {
        setIsBookmarked(true);
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

  const [removeEpisodeFromWatchlistMutation, { loading: removeLoading }] =
    useRemoveEpisodeFromWatchlistMutation({
      variables: {
        where: {
          episodeId_watchlistId: {
            episodeId: episodeId,
            watchlistId: defaultWatchlist?.id || 0,
          },
        },
      },
      onCompleted: () => {
        setIsBookmarked(false);
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
              default: {
                equals: true,
              },
            },
          },
        },
      ],
    });

  useEffect(() => {
    if (defaultBookmarked === true) return;
    if (session?.user?.email) {
      getDefaultWatchlist();
    }
  }, [getDefaultWatchlist, session?.user?.email, defaultBookmarked]);

  useEffect(() => {
    if (!session || Object.keys(session).length === 0 || !defaultWatchlist)
      return;
    setIsBookmarked(checkIfBookmarked(episodeId, defaultWatchlist));
  }, [episodeId, session, defaultWatchlist]);

  useEffect(() => {
    if (watchlistQueryData) {
      setDefaultWatchlist(watchlistQueryData.watchlists[0]);
    }
  }, [watchlistQueryData]);

  return {
    isBookmarked,
    addToWatchlist: () =>
      !isBookmarked
        ? addEpisodeToWatchlistMutation()
        : removeEpisodeFromWatchlistMutation(),
    loading: loading || addLoading || removeLoading || watchlistLoading,
  };
};
