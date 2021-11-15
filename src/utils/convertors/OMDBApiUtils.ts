import { Prisma, Serie } from "@prisma/client";
import axios from "axios";
import prisma from "../../../lib/PrismaClient/prisma";
import { OMDBSeries } from './OMDBSeries';

export class OMDBApiUtils {

    public static async fetchOMDBSeriesByTitle(title: string): Promise<Prisma.SerieCreateInput | undefined> {
        const titleEncoded = encodeURIComponent(title);
        var seriesResp = undefined
        var seriesToCreate: OMDBSeries | Prisma.SerieCreateInput | undefined = undefined
        try {
            seriesResp = await (await axios.get(`${process.env.OMDB_API_URL}/?t=${titleEncoded}&apiKey=${process.env.OMDB_API_KEY}&plot=full&type=series`)).data
            seriesToCreate = new OMDBSeries(seriesResp?.Title, seriesResp?.Year, seriesResp?.Rated, seriesResp?.Released, seriesResp?.Runtime, seriesResp?.Genre, seriesResp?.Director, seriesResp?.Actors, seriesResp?.Plot, seriesResp?.Language, seriesResp?.Poster, seriesResp?.imdbRating, seriesResp?.totalSeasons)
        } catch (err) {
            console.error(err)
        }
        return seriesToCreate?.toPrismaSeries()
    }

    private static checkIfSeriesExistByTitle = (title: string): Promise<Serie | null> => {
        return prisma.serie.findUnique({
            where: {
                title: title
            }
        })
    }

    public static fetchFromOMDBandCreateSeries = async (q: string): Promise<Serie | undefined> => {
        const existingSeries = await OMDBApiUtils.checkIfSeriesExistByTitle(q || "")
        if (existingSeries) {
            return existingSeries
        }
        const series = await OMDBApiUtils.fetchOMDBSeriesByTitle(q)
        if (series) {
            const newSeries = await prisma.serie.create({ data: series })
            console.log(`Created series with id ${newSeries.id}`)
            return newSeries
        }
    }
}