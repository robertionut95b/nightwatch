import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import {
  useWatchlistsQuery,
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
): IUseIsBookmarkedResults => {
  const { onSuccess, onError } = options;
  const [session, loading] = useSession();
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [defaultWatchlist, setDefaultWatchlist] =
    useState<WatchlistsQuery['watchlists'][0]>();
  const { data: watchlistQueryData, loading: watchlistLoading } =
    useWatchlistsQuery({
      variables: {
        where: {
          default: {
            equals: true,
          },
        },
      },
      onError: (err) => {
        if (typeof window === 'undefined') {
          console.error(err);
        }
      },
    });
  const [bookmarkLoading, setBookmarkLoading] = useState<boolean>(false);

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
              default: {
                equals: true,
              },
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
    if (watchlistQueryData) {
      setDefaultWatchlist(watchlistQueryData.watchlists[0]);
    }
  }, [watchlistQueryData]);

  useEffect(() => {
    if (!session || !defaultWatchlist) return;
    if (checkIfBookmarked(episodeId, defaultWatchlist)) {
      setIsBookmarked(true);
    }
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
