import { ApolloError } from '@apollo/client';
import { Movie } from '@prisma/client';
import { useWatchlistsLazyQuery, WatchlistsQuery } from 'generated/graphql';
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
  defaultSeen?: boolean,
): IIsSeenResp => {
  const [isSeen, setIsSeen] = useState<boolean>(defaultSeen || false);
  const [seenAt, setSeenAt] = useState<string>('');
  const [session, loading] = useSession();
  const [wachlistId, setWatchlistId] = useState<number>(0);
  const { onSuccess, onError } = options;

  const [getDefaultWatchlist, { loading: watchlistLoading }] =
    useWatchlistsLazyQuery({
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
      onCompleted: (wchData) => {
        if (wchData?.watchlists?.length) {
          setWatchlistId(wchData?.watchlists[0]?.id || wachlistId);

          const seenMovie = checkIsSeenMovie(movieId, wchData.watchlists[0]);
          setIsSeen(seenMovie.seen);
          setSeenAt(seenMovie.seenAt);
        }
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
    });

  useEffect(() => {
    if (defaultSeen === true) return;
    if (session?.user?.email) {
      getDefaultWatchlist();
    }
  }, [defaultSeen, getDefaultWatchlist, session?.user?.email]);

  return {
    isSeen,
    seenAt,
    loading: loading || watchlistLoading || mutationLoading,
    setIsSeen: () => updateIsSeenMovieMutation(),
  };
};

export default useIsSeenMovie;
