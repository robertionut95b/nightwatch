import { Prisma } from '@prisma/client'
import { Movie, Serie } from '../../../generated/graphql';

export interface IPrismaSeriesConvertor {
    toSeries: () => Serie | undefined
    toPrismaSeries: () => Prisma.SerieCreateInput
}

export interface IPrismaMovieConvertor {
    toMovie: () => Movie | undefined
    toPrismaMovie: () => Prisma.MovieCreateInput
}