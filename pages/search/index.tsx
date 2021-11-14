import { Movie, Prisma } from "@prisma/client";
import { GetServerSideProps } from "next";
import Layout from '../../components/layout/layout';
import apolloClient from '../../lib/apollo/apolloClient';
import MovieCard from "../../components/items/MovieCard";
import { SearchMovieByTitleDocument, SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables, SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables, SearchSeriesByTitleDocument, Series } from '../../generated/graphql';
import SeriesCard from "../../components/items/SeriesCard";
import { OMDBApiUtils } from '../../src/utils/convertors/OMDBApiUtils';

export default function SearchResults({ movies, series }: { movies: Movie[], series: Series[] }) {

    return (
        <Layout home={false}>
            <div className="flex flex-col gap-y-4">
                {
                    movies?.length > 0 &&
                    <>
                        <p className="text-lg font-bold">Movies</p>
                        <div className="search-results flex flex-row flex-wrap gap-y-4 gap-x-6">
                            {
                                movies?.map(m => <MovieCard movie={m} key={m.id} />)
                            }
                        </div>
                    </>
                }
                {
                    series?.length > 0 &&
                    <>
                        <p className="text-lg font-bold">Series</p>
                        <div className="search-results flex flex-row flex-wrap gap-y-4 gap-x-6">
                            {
                                series?.map(s => <SeriesCard series={s} key={s.id} />)
                            }
                        </div>
                    </>
                }
                {
                    (movies?.length === 0 && series?.length === 0) && <span className="text-center">Nothing entries found for your search</span>
                }
                <div className="search-more mt-8 flex flex-col items-center gap-y-4">
                    <p className="text-center">Not what you're looking for ? Extend the search towards the OMDB Database</p>
                    <button type="button" className="btn-primary">
                        Find more
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { query } = context

    const { data, error } = await apolloClient.query<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>({
        query: SearchMovieByTitleDocument,
        variables: { title: query?.q as string || "" }
    })

    if (error) console.error(error)
    const movies = data?.searchMovieByTitle || []

    const { data: seriesData, error: seriesError } = await apolloClient.query<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>({
        query: SearchSeriesByTitleDocument,
        variables: { title: query?.q as string || "" }
    })

    if (seriesError) console.error(error)
    const series = seriesData?.searchSeriesByTitle || []

    try {
        const searchedSeries = await OMDBApiUtils.fetchFromOMDBandCreateSeries(query?.q as string)
        if (searchedSeries) series.push(searchedSeries)
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002') console.log(`Movie/Series already exists`)
        }
        console.error(err)
    }

    return {
        props: {
            movies: movies,
            series: series
        }
    }
}