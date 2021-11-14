import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { GetServerSideProps } from 'next';
import apolloClient from '../../lib/apollo/apolloClient';
import { AllSeriesDocument, AllSeriesQuery, AllSeriesQueryVariables, Genre, GenresDocument, GenresQuery, GenresQueryVariables, Series } from "../../generated/graphql";
import { useRouter } from 'next/dist/client/router';
import SeriesCard from "../../components/items/SeriesCard";

export default function SeriesPage({ series, genres }: { series: Series[], genres: Genre[] }) {

    const router = useRouter()
    const { g } = router.query
    const [genreQuery, setGenreQuery] = useState<string>(g as string || "")

    useEffect(() => {
        if (genreQuery) {
            router.push({
                query: { g: genreQuery }
            })
        } else {
            router.replace(router.pathname)
        }
    }, [genreQuery])

    return (
        <Layout home={false}>
            <Head>
                <title>Series</title>
            </Head>
            <h4 className='mb-4 text-2xl font-bold'>
                Series
            </h4>
            <section className="series-filters mb-8">
                <div className="flex flex-row">
                    {
                        genres?.length > 0 &&
                        <select
                            className="bg-backgroundSecondary p-1 px-3 rounded-lg border-0 focus:border-0"
                            defaultValue={genreQuery}
                            onChange={(e) => setGenreQuery(e.target.value)}
                        >
                            <option value="" >All</option>
                            {genres.map(g => <option key={g?.id} value={g?.name || ""}>{g?.name || ""}</option>)}
                        </select>
                    }
                </div>
            </section>
            <section className="max-w-max flex flex-row gap-x-4 gap-y-8 flex-wrap justify-around">
                <>
                    {series.length === 0 ? "No series found" : null}
                    {series?.map(s => <SeriesCard series={s} key={s.id} />)}
                </>
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const { data, error } = await apolloClient.query<AllSeriesQuery, AllSeriesQueryVariables>({
        query: AllSeriesDocument,
        variables: { genre: query?.g || "" }
    });
    if (error) console.error(error)
    const series = data?.series || []

    const { data: genreData, error: genreError } = await apolloClient.query<GenresQuery, GenresQueryVariables>({
        query: GenresDocument,
        // variables:
    })
    if (genreError) console.error(error)
    const genres = genreData?.genres || []

    return {
        props: {
            series: series,
            genres: genres
        }
    }
}