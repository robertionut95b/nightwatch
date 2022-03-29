import { ApolloError } from '@apollo/client';
import { removeEmpty2 } from '../../components/utils/helpers/objects';
import {
  MovieUpdateInput,
  useUpdateMovieMutation,
} from '../../generated/graphql';

interface IUseCreateMovieResp {
  updateMovie: (movie: MovieUpdateInput) => void;
  loading: boolean;
}

const useUpdateMovie = (options: {
  onSuccess?: () => void;
  onError?: (err: ApolloError | undefined) => void;
}): IUseCreateMovieResp => {
  const { onError, onSuccess } = options;

  const [updateMovieMutation, { loading }] = useUpdateMovieMutation({
    onCompleted: () => {
      onSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  return {
    updateMovie: (movie) => {
      const sanitizedMovie = removeEmpty2(movie) as MovieUpdateInput;
      // @ts-expect-error("movie.imdbID is missing in the type definition")
      const { set: imdbID } = sanitizedMovie.imdbID;

      return updateMovieMutation({
        variables: {
          data: {
            ...sanitizedMovie,
          },
          where: {
            imdbID: imdbID,
          },
        },
      });
    },
    loading,
  };
};

export default useUpdateMovie;
