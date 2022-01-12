import { Movie } from '@prisma/client';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import {
  WatchlistsQuery,
  useWatchlistsQuery,
  WatchlistsDocument,
  useAddMovieToWatchlistMutation,
  useRemoveMovieFromWatchlistMutation,
} from '../../../../generated/graphql';
import { ApolloError } from '@apollo/client';

interface IUseIsBookmarkedResults {
  isBookmarked: boolean;
  addToWatchlist: () => void;
  loading: boolean;
}

const checkIfBookmarked = (
  movieId: number,
  watchlist: WatchlistsQuery['watchlists'][0],
): boolean => {
  return (
    watchlist.movieWatchlist?.movies.find((m) => m.movieId === movieId) !==
    undefined
  );
};

export const useIsBookmarked = (
  movieId: Movie['id'],
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

  const [addMovieToWatchlistMutation, { loading: addLoading }] =
    useAddMovieToWatchlistMutation({
      variables: {
        movie: {
          connect: {
            id: movieId,
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

  const [removeMovieFromWatchlistMutation, { loading: removeLoading }] =
    useRemoveMovieFromWatchlistMutation({
      variables: {
        where: {
          movieId_watchlistId: {
            movieId: movieId,
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
    if (checkIfBookmarked(movieId, defaultWatchlist)) {
      setIsBookmarked(true);
    }
  }, [movieId, session, defaultWatchlist]);

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
        ? addMovieToWatchlistMutation()
        : removeMovieFromWatchlistMutation(),
    loading: bookmarkLoading,
  };
};
