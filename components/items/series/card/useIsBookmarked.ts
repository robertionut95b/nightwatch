import { Serie } from '@prisma/client';
import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import {
  useAddSeriesToWatchlistMutation,
  useRemoveSeriesFromWatchlistMutation,
  WatchlistsQuery,
  useWatchlistsLazyQuery,
  WatchlistsDocument,
} from '../../../../generated/graphql';
import { ApolloError } from '@apollo/client';

interface IUseIsBookmarkedResults {
  isBookmarked: boolean;
  addToWatchlist: () => void;
  loading: boolean;
}

const checkIfBookmarked = (
  seriesId: number,
  watchlist: WatchlistsQuery['watchlists'][0],
): boolean => {
  return (
    watchlist.seriesWatchlist?.series.find((s) => s.serieId === seriesId) !==
    undefined
  );
};

export const useIsBookmarked = (
  seriesId: Serie['id'],
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

  const [addSeriesToWatchlistMutation, { loading: addLoading }] =
    useAddSeriesToWatchlistMutation({
      variables: {
        serie: {
          connect: {
            id: seriesId,
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

  const [removeSeriesFromWatchlistMutation, { loading: removeLoading }] =
    useRemoveSeriesFromWatchlistMutation({
      variables: {
        where: {
          serieId_watchlistId: {
            serieId: seriesId,
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
    setIsBookmarked(checkIfBookmarked(seriesId, defaultWatchlist));
  }, [seriesId, session, defaultWatchlist]);

  useEffect(() => {
    if (watchlistQueryData) {
      setDefaultWatchlist(watchlistQueryData.watchlists[0]);
    }
  }, [watchlistQueryData]);

  return {
    isBookmarked,
    addToWatchlist: () =>
      !isBookmarked
        ? addSeriesToWatchlistMutation()
        : removeSeriesFromWatchlistMutation(),
    loading: loading || addLoading || removeLoading || watchlistLoading,
  };
};
