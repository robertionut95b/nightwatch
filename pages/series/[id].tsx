import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Serie } from '../../generated/graphql';
import SeriesDetailsCard from '../../components/items/SeriesDetailsCard'
import prisma from '../../lib/PrismaClient/prisma'

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
    const series = await prisma.serie.findMany({
        include: {
            genres: true,
            actors: true,
            directors: true,
            languages: true,
            seasons: true,
        }
    })
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
    var serie = await prisma.serie.findUnique({
        where: {
            id: Number.parseInt(id),
        },
        include: {
            genres: true,
            actors: true,
            directors: true,
            languages: true,
            seasons: true,
        }
    })

    const serieStr = JSON.stringify(serie)
    serie = JSON.parse(serieStr)

    var relatedSeries = await prisma.serie.findMany({
        where: {
            id: {
                not: Number.parseInt(id)
            },
            genres: {
                some: {
                    name: {
                        in: serie?.genres?.map((g) => { return g.name }),
                        mode: "insensitive"
                    }
                }
            }
        },
        include: {
            genres: true
        },
        take: 6
    })

    const relatedSeriesStr = JSON.stringify(relatedSeries)
    relatedSeries = JSON.parse(relatedSeriesStr)

    return {
        props: {
            series: serie,
            relatedSeries: relatedSeries
        },
    }
}