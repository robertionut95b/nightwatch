import { ApolloError } from '@apollo/client';
import { useUpsertRatingMutation } from 'generated/graphql';
import { useSession } from 'next-auth/client';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { useEffect } from 'react';
import {
  useGetRatingsLazyQuery,
  UpsertRatingMutation,
} from '../../generated/graphql';

interface IUseUserSeriesRatingResponse {
  rating: number;
  upsertSeriesRating: (rating: number) => void;
  loading: boolean;
}

const useUserSeriesRating = (
  seriesImdbId: string,
  options: {
    onSuccess?: (data: UpsertRatingMutation) => void;
    onError?: (err: ApolloError | undefined) => void;
  },
): IUseUserSeriesRatingResponse => {
  const { onError, onSuccess } = options;
  const [session, loading] = useSession();

  const [geSeriesRatingsLazyQuery, { data, loading: queryLoading }] =
    useGetRatingsLazyQuery();

  const [upsertRatingMutation, { loading: upsertLoading }] =
    useUpsertRatingMutation({
      onCompleted: (resp) => onSuccess?.(resp),
      onError: (err) => onError?.(err),
    });

  useEffect(() => {
    const appSession = session as AppSession;
    if (appSession && appSession.user) {
      geSeriesRatingsLazyQuery({
        variables: {
          where: {
            userId: {
              equals: appSession.user.id || undefined,
            },
            serie: {
              is: {
                imdbID: {
                  equals: seriesImdbId,
                },
              },
            },
          },
        },
      });
    }
  }, [session, geSeriesRatingsLazyQuery, seriesImdbId]);

  return {
    rating: data?.ratings?.[0]?.rating || 0,
    upsertSeriesRating: (rating: number) => {
      const appSession = session as AppSession;

      if (!appSession.user.id) return;

      return upsertRatingMutation({
        variables: {
          create: {
            rating,
            serie: {
              connect: {
                imdbID: seriesImdbId,
              },
            },
            // @ts-expect-error("Unexpected error with typegraphql")
            user: {
              connect: {
                id: appSession?.user?.id,
              },
            },
          },
          update: {
            rating: {
              set: rating,
            },
          },
          where: {
            id: data?.ratings?.[0]?.id || '',
          },
        },
      });
    },
    loading: loading || upsertLoading || queryLoading,
  };
};

export default useUserSeriesRating;
