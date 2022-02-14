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
  const [bookmarkLoading, setBookmarkLoading] = useState<boolean>(true);

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
    onError: (err) => {
      if (typeof window === 'undefined') {
        console.error(err);
      }
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
        if (typeof window === 'undefined') {
          console.error(err);
        }
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
        if (typeof window === 'undefined') {
          console.error(err);
        }
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
    if (session?.user?.email) {
      getDefaultWatchlist();
    }
  }, [getDefaultWatchlist, session?.user?.email]);

  useEffect(() => {
    if (watchlistQueryData) {
      setDefaultWatchlist(watchlistQueryData.watchlists[0]);
    }
  }, [watchlistQueryData]);

  useEffect(() => {
    if (!session || Object.keys(session).length === 0 || !defaultWatchlist)
      return;
    setIsBookmarked(checkIfBookmarked(episodeId, defaultWatchlist));
  }, [episodeId, session, defaultWatchlist]);

  useEffect(() => {
    if (loading || addLoading || removeLoading || watchlistLoading) {
      setBookmarkLoading(true);
    } else {
      setBookmarkLoading(false);
    }
  }, [loading, addLoading, removeLoading, watchlistLoading]);

  return {
    isBookmarked,
    addToWatchlist: () =>
      !isBookmarked
        ? addEpisodeToWatchlistMutation()
        : removeEpisodeFromWatchlistMutation(),
    loading: bookmarkLoading,
  };
};
