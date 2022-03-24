import { ApolloError } from '@apollo/client';
import { removeEmpty2 } from '../../components/utils/helpers/objects';
import {
  MovieCreateInput,
  useCreateMovieMutation,
} from '../../generated/graphql';

interface IUseCreateMovieResp {
  createMovie: (movie: MovieCreateInput) => void;
  loading: boolean;
}

const useCreateMovie = (options: {
  onSuccess?: () => void;
  onError?: (err: ApolloError | undefined) => void;
}): IUseCreateMovieResp => {
  const { onError, onSuccess } = options;

  const [createMovieMutation, { loading }] = useCreateMovieMutation({
    onCompleted: () => {
      onSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  return {
    createMovie: (movie) => {
      const sanitizedMovie = removeEmpty2(movie) as MovieCreateInput;
      return createMovieMutation({
        variables: {
          ...sanitizedMovie,
        },
      });
    },
    loading,
  };
};

export default useCreateMovie;
