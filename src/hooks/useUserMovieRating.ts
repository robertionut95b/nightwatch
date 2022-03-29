import { ApolloError } from '@apollo/client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import {
  UpsertRatingMutation,
  useUpsertRatingMutation,
  useGetRatingsLazyQuery,
} from 'generated/graphql';

interface IUseUserMovieRatingResponse {
  rating: number;
  upsertMovieRating: (rating: number) => void;
  loading: boolean;
}

const useUserMovieRating = (
  movieImdbId: string,
  options: {
    onSuccess?: (data: UpsertRatingMutation) => void;
    onError?: (err: ApolloError | undefined) => void;
  },
): IUseUserMovieRatingResponse => {
  const { onError, onSuccess } = options;
  const [session, loading] = useSession();

  const [geMovieRatingsLazyQuery, { data, loading: queryLoading }] =
    useGetRatingsLazyQuery();

  const [upsertRatingMutation, { loading: upsertLoading }] =
    useUpsertRatingMutation({
      onCompleted: (resp) => onSuccess?.(resp),
      onError: (err) => onError?.(err),
    });

  useEffect(() => {
    const appSession = session as AppSession;
    if (appSession && appSession.user) {
      geMovieRatingsLazyQuery({
        variables: {
          where: {
            userId: {
              equals: appSession.user.id || undefined,
            },
            movie: {
              is: {
                imdbID: {
                  equals: movieImdbId,
                },
              },
            },
          },
        },
      });
    }
  }, [session, geMovieRatingsLazyQuery, movieImdbId]);

  return {
    rating: data?.ratings?.[0]?.rating || 0,
    loading: loading || upsertLoading || queryLoading,
    upsertMovieRating: (rating) => {
      const appSession = session as AppSession;

      if (!appSession.user.id) return;

      return upsertRatingMutation({
        variables: {
          create: {
            rating,
            movie: {
              connect: {
                imdbID: movieImdbId,
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
  };
};

export default useUserMovieRating;
