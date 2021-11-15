import { Movie } from "@prisma/client";
import { GetServerSideProps } from "next";
import Layout from '../../components/layout/layout';
import apolloClient from '../../lib/apollo/apolloClient';
import MovieCard from "../../components/items/MovieCard";
import { SearchMovieByTitleDocument, SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables, SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables, SearchSeriesByTitleDocument, Serie, useCreateSerieSearchMutation, CreateSerieSearchMutation } from '../../generated/graphql';
import SeriesCard from "../../components/items/SeriesCard";
import { OMDBApiUtils } from '../../src/utils/convertors/OMDBApiUtils';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { ApolloError } from "@apollo/client";
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import { Spinner } from "../../components/utils/spinner";

export default function SearchResults({ movies, series }: { movies: Movie[], series: Serie[] }) {

    const [session] = useSession()
    const router = useRouter()
    const { query } = router
    const [omdbSeries, setOmdbSeries] = useState<CreateSerieSearchMutation['createSerie'][]>([])

    const [createSerieSearchMutation, { loading }] = useCreateSerieSearchMutation({
        onError: (error: ApolloError) => {
            console.error(error)
        },
        onCompleted: (data: CreateSerieSearchMutation) => {
            const foundSeries = data.createSerie
            setOmdbSeries([...omdbSeries, foundSeries])
        }
    })

    const searchOMDBAPI = async (q: string): Promise<void> => {
        if (!session) alert("You must login first")
        try {
            if (series.filter(s => s.title.toLocaleLowerCase().includes(q.toLocaleLowerCase()))) {
                console.warn("Series already in database. Try searching in more detail")
                return
            }

            const searchedSeries = await OMDBApiUtils.fetchOMDBSeriesByTitle(q)
            if (searchedSeries) {
                await createSerieSearchMutation({
                    variables: {
                        ...searchedSeries
                    }
                })
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        if (loading) NProgress.start()
        if (!loading) NProgress.done()
    }, [loading])

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
                    (movies?.length === 0 && series?.length === 0) && <span className="text-center">No entries found for your search</span>
                }
                <div className="search-more mt-8 flex flex-col items-center gap-y-4">
                    <p className="text-center">Not what you're looking for ? Extend the search towards the OMDB Database</p>
                    <button type="button" className="btn-primary" onClick={() => searchOMDBAPI(query.q as string)}>
                        Find more
                    </button>
                </div>
                {
                    omdbSeries?.length > 0 &&
                    <>
                        <div className="search-results-ombdb mt-16 flex flex-row flex-wrap gap-y-4 gap-x-6 items-center justify-center">
                            {
                                omdbSeries?.map(s => <SeriesCard series={s} key={s.id} />)
                            }
                        </div>
                        <p className="text-center">Is this what you're looking for? If not, keep typing to get a more accurate result</p>
                        {loading ? <Spinner /> : null}
                    </>
                }
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
    const movies = data?.movies || []

    const { data: seriesData, error: seriesError } = await apolloClient.query<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>({
        query: SearchSeriesByTitleDocument,
        variables: { title: query?.q as string || "" }
    })

    if (seriesError) console.error(error)
    const series = seriesData?.series || []

    return {
        props: {
            movies: movies,
            series: series
        }
    }
}