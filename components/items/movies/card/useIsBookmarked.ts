import { Movie } from '@prisma/client';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import {
  WatchlistsQuery,
  useWatchlistsLazyQuery,
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
  });

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
  }, [defaultBookmarked, getDefaultWatchlist, session?.user?.email]);

  useEffect(() => {
    if (watchlistQueryData) {
      setDefaultWatchlist(watchlistQueryData.watchlists[0]);
    }
  }, [watchlistQueryData]);

  useEffect(() => {
    if (!session || Object.keys(session).length === 0 || !defaultWatchlist)
      return;
    setIsBookmarked(checkIfBookmarked(movieId, defaultWatchlist));
  }, [movieId, session, defaultWatchlist]);

  return {
    isBookmarked,
    addToWatchlist: () =>
      !isBookmarked
        ? addMovieToWatchlistMutation()
        : removeMovieFromWatchlistMutation(),
    loading: loading || addLoading || removeLoading || watchlistLoading,
  };
};
