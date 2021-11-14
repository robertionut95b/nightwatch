import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import apolloClient from '../../lib/apollo/apolloClient'
import { ParsedUrlQuery } from 'querystring'
import { Series, AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables, AllSeriesDetailsDocument, SeriesDocument, SeriesQueryVariables, SeriesQuery } from '../../generated/graphql';
import SeriesDetailsCard from '../../components/items/SeriesDetailsCard'

interface IParams extends ParsedUrlQuery {
    id: string,
}

export default function SeriesPage({ series }: { series: Series }) {
    return (
        <Layout home={false}>
            <Head>
                <title>{series.title}</title>
            </Head>
            <article>
                <SeriesDetailsCard series={series} />
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
    const { data, error } = await apolloClient.query<SeriesQuery, SeriesQueryVariables>({
        query: SeriesDocument,
        variables: { id: Number.parseInt(id) }
    });

    if (error) console.error(error)
    const serie = data?.serie
    return {
        props: {
            series: serie
        },
    }
}