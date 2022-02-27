import { Prisma } from '@prisma/client';
import {
  CreateSeasonMutationVariables,
  CreateSerieMutationVariables,
  CreateMovieMutationVariables,
} from '../../../generated/graphql';
export interface IPrismaSeriesConvertor {
  toCreateVariables: () => CreateSerieMutationVariables;
  toPrismaSeriesCreate: () => Prisma.SerieCreateInput;
}

export interface IPrismaMovieConvertor {
  toCreateVariables: () => CreateMovieMutationVariables;
  toPrismaMovieCreate: () => Prisma.MovieCreateInput;
}

export interface IPrismaSeasonsConvertor {
  toCreateVariables: () => CreateSeasonMutationVariables;
  toPrismaSeasonCreate: () => Prisma.SeasonCreateInput;
}
