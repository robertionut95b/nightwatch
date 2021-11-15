import { Prisma } from '@prisma/client'
import { CreateSerieMutationVariables, Movie } from '../../../generated/graphql';

export interface IPrismaSeriesConvertor {
    toSeries: () => CreateSerieMutationVariables
    toPrismaSeries: () => Prisma.SerieCreateInput
}

export interface IPrismaMovieConvertor {
    toMovie: () => Movie
    toPrismaMovie: () => Prisma.MovieCreateInput
}