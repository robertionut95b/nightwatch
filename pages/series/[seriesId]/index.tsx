import Layout from '../../../components/layout/layout';
import Head from 'next/head';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Serie } from '../../../generated/graphql';
import SeriesDetailsCard from '../../../components/items/series/details/SeriesDetailsCard';
import prisma from '../../../lib/PrismaClient/prisma';

interface IParams extends ParsedUrlQuery {
  seriesId: string;
}

export default function SeriesPage({
  series,
  relatedSeries,
}: {
  series: Serie;
  relatedSeries: Serie[];
}): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>{series.title}</title>
      </Head>
      <article>
        <SeriesDetailsCard series={series} relatedSeries={relatedSeries} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const series = await prisma.serie.findMany({
      include: {
        genres: true,
        actors: true,
        directors: true,
        languages: true,
        seasons: true,
      },
    });
    return {
      paths: series.map((s) => {
        return {
          params: { seriesId: String(s?.imdbID) || '' },
        };
      }),
      fallback: 'blocking',
    };
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { seriesId } = params as IParams;
  let serie = await prisma.serie.findUnique({
    where: {
      imdbID: seriesId,
    },
    include: {
      genres: true,
      actors: true,
      directors: true,
      languages: true,
      seasons: {
        include: {
          episodeIds: true,
        },
      },
    },
  });

  const serieStr = JSON.stringify(serie);
  serie = JSON.parse(serieStr);

  let relatedSeries = await prisma.serie.findMany({
    where: {
      imdbID: {
        not: seriesId,
      },
      genres: {
        every: {
          name: {
            in: serie?.genres?.map((g) => {
              return g.name;
            }),
            mode: 'insensitive',
          },
        },
      },
    },
    include: {
      genres: true,
      seasons: true,
    },
    take: 6,
  });

  const relatedSeriesStr = JSON.stringify(relatedSeries);
  relatedSeries = JSON.parse(relatedSeriesStr);

  return {
    props: {
      series: serie,
      relatedSeries: relatedSeries,
    },
  };
};
