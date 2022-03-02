import { ApolloError } from '@apollo/client';
import { Movie } from '@prisma/client';
import {
  useWatchlistsLazyQuery,
  WatchlistsDocument,
  WatchlistsQuery,
} from 'generated/graphql';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import { useUpdateIsSeenMovieMutation } from '../../../../generated/graphql';

interface IIsSeenResp {
  isSeen: boolean;
  seenAt: string;
  loading: boolean;
  setIsSeen: () => void;
}

const checkIsSeenMovie = (
  movieId: Movie['id'],
  watchlist: WatchlistsQuery['watchlists'][number],
): {
  seen: boolean;
  seenAt: string;
} => {
  const movie = watchlist.movieWatchlist?.movies.find(
    (m) => m.movieId === movieId,
  );
  return {
    seen: movie?.seen || false,
    seenAt: movie?.seenAt || '',
  };
};

const useIsSeenMovie = (
  movieId: Movie['id'],
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

  const [updateIsSeenMovieMutation, { loading: mutationLoading }] =
    useUpdateIsSeenMovieMutation({
      variables: {
        where: {
          movieId_watchlistId: {
            movieId: movieId,
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

      const seenSerie = checkIsSeenMovie(
        movieId,
        defaultWatchlist.watchlists[0],
      );
      setIsSeen(seenSerie.seen);
      setSeenAt(seenSerie.seenAt);
    }
  }, [defaultWatchlist, movieId]);

  return {
    isSeen,
    seenAt,
    loading: loading || watchlistLoading || mutationLoading,
    setIsSeen: () => updateIsSeenMovieMutation(),
  };
};

export default useIsSeenMovie;
