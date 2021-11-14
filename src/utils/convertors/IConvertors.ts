import { Prisma } from '@prisma/client'
import { Movie, Series } from '../../../generated/graphql';

export interface IPrismaSeriesConvertor {
    toSeries: () => Series | undefined
    toPrismaSeries: () => Prisma.SeriesCreateInput
}

export interface IPrismaMovieConvertor {
    toMovie: () => Movie | undefined
    toPrismaMovie: () => Prisma.MovieCreateInput
}