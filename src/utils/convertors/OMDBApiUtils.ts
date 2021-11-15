import { Prisma, Serie } from "@prisma/client";
import axios from "axios";
import prisma from "../../../lib/PrismaClient/prisma";
import { OMDBSeries } from './OMDBSeries';
import apolloClient from '../../../lib/apollo/apolloClient';
import { CreateSerieSearchDocument, CreateSerieSearchMutation, CreateSerieSearchMutationVariables, SearchSeriesByTitleDocument, SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables } from '../../../generated/graphql';

export class OMDBApiUtils {

    public static async fetchOMDBSeriesByTitle(title: string): Promise<CreateSerieSearchMutationVariables | undefined> {
        const titleEncoded = encodeURIComponent(title);
        var seriesResp = undefined
        var seriesToCreate: OMDBSeries | Prisma.SerieCreateInput | undefined = undefined
        try {
            seriesResp = await (await axios.get(`${process.env.OMDB_API_URL}/?t=${titleEncoded}&apiKey=${process.env.OMDB_API_KEY}&plot=full&type=series`)).data
            seriesToCreate = new OMDBSeries(seriesResp?.Title, seriesResp?.Year, seriesResp?.Rated, seriesResp?.Released, seriesResp?.Runtime, seriesResp?.Genre, seriesResp?.Director, seriesResp?.Actors, seriesResp?.Plot, seriesResp?.Language, seriesResp?.Poster, seriesResp?.imdbRating, seriesResp?.totalSeasons)
        } catch (err) {
            console.error(err)
        }
        return seriesToCreate?.toSeries()
    }
}