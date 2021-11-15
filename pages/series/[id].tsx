import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import apolloClient from '../../lib/apollo/apolloClient'
import { ParsedUrlQuery } from 'querystring'
import { Serie, AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables, AllSeriesDetailsDocument, SerieByIdDocument, SerieByIdQueryVariables, SerieByIdQuery, SeriesQuery, SeriesQueryVariables, SeriesDocument } from '../../generated/graphql';
import SeriesDetailsCard from '../../components/items/SeriesDetailsCard'

interface IParams extends ParsedUrlQuery {
    id: string,
}

export default function SeriesPage({ series, relatedSeries }: { series: Serie, relatedSeries: Serie[] }) {
    return (
        <Layout home={false}>
            <Head>
                <title>{series.title}</title>
            </Head>
            <article>
                <SeriesDetailsCard series={series} relatedSeries={relatedSeries} />
            </article>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const { data, error } = await apolloClient.query<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>({ query: AllSeriesDetailsDocument });

    if (error) console.error(error)
    const series = data?.series || []
    return {
        paths: series.map((s) => {
            return {
                params: { id: String(s?.id) || "" }
            }
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as IParams
    const { data, error } = await apolloClient.query<SerieByIdQuery, SerieByIdQueryVariables>({
        query: SerieByIdDocument,
        variables: { id: Number.parseInt(id) }
    });

    if (error) console.error(error)
    const serie = data?.serie

    const genresFilter = serie?.genres.map((g) => { return g.name })
    const { data: relatedSeriesData, error: relatedSeriesError } = await apolloClient.query<SeriesQuery, SeriesQueryVariables>({
        query: SeriesDocument,
        variables: { id: serie?.id || Number(id), genre: genresFilter },
    })

    if (relatedSeriesError) console.error(relatedSeriesError)
    const relatedSeries = relatedSeriesData?.series || []

    return {
        props: {
            series: serie,
            relatedSeries: relatedSeries
        },
    }
}