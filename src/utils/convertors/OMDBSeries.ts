import { IPrismaSeriesConvertor } from './IConvertors';
import { Prisma } from '@prisma/client'
import { parse } from 'date-fns';
import { Serie } from '../../../generated/graphql';

export class OMDBSeries implements IPrismaSeriesConvertor {

    title: string
    year: string
    rated: string
    released: string
    runtime: string
    genre: string
    director: string
    actors: string
    plot: string
    language: string
    poster: string
    imdbRating: string
    totalSeasons: string

    constructor(title: string, year: string, rated: string, released: string, runtime: string, genre: string, director: string, actors: string, plot: string, language: string, poster: string, imdbRating: string, totalSeasons: string) {
        this.title = title
        this.year = year
        this.rated = rated
        this.released = released
        this.runtime = runtime
        this.genre = genre
        this.director = director
        this.actors = actors
        this.plot = plot
        this.language = language
        this.poster = poster
        this.imdbRating = imdbRating
        this.totalSeasons = totalSeasons
    }

    public toPrismaSeries(): Prisma.SerieCreateInput {
        const genres = this.genre?.split(",")
        const languages = this.language?.split(",")
        const series: Prisma.SerieCreateInput = {
            title: this.title,
            year: parseInt(this.year?.split("-")[0]),
            rating: this.rated,
            release: parse(this.released, "dd MMM yyyy", new Date()),
            runtime: parseInt(this.runtime),
            genres: {
                connect: genres.map(g => {
                    return { name: g.trim() }
                })
            },
            directors: undefined,
            actors: undefined,
            plot: this.plot,
            languages: {
                connect: languages.map(l => {
                    return { name: l.trim() }
                })
            },
            poster: this.poster,
            imdbRating: parseFloat(this.imdbRating),
            totalSeasons: parseInt(this.totalSeasons)
        }
        return series
    }

    public toSeries: () => Serie | undefined = () => {
        return undefined
    }
}