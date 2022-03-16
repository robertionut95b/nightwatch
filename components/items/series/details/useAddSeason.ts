import { ApolloError } from '@apollo/client';
import { Serie } from '@prisma/client';
import {
  CreateSeasonMutation,
  useCreateSeasonMutation,
} from '../../../../generated/graphql';
import { OMDBApiUtils } from '../../../../src/utils/convertors/OMDBApiUtils';

interface IUseAddSeasonResults {
  createSeason: () => void;
  loading: boolean;
  data?: CreateSeasonMutation | null;
}

const useAddSeason = (
  seriesId: Serie['imdbID'],
  selectedSeason: number,
  options: {
    onSuccess?: () => void;
    onError?: (err: ApolloError | undefined) => void;
  },
): IUseAddSeasonResults => {
  const { onError, onSuccess } = options;

  const [createSeasonMutation, { data, loading }] = useCreateSeasonMutation({
    fetchPolicy: 'no-cache',
    onError: (error: ApolloError) => {
      onError?.(error);
    },
    onCompleted: () => {
      onSuccess?.();
    },
  });

  const createSeason = async (): Promise<void> => {
    const requestedSeason =
      await OMDBApiUtils.fetchSeriesEpisodeBySeriesTitleAndSeason(
        seriesId,
        selectedSeason,
      );

    if (!requestedSeason) {
      return;
    }

    await createSeasonMutation({
      variables: {
        ...requestedSeason.toCreateVariables(),
      },
    });
  };

  return {
    loading: loading,
    createSeason,
    data,
  };
};

export default useAddSeason;
