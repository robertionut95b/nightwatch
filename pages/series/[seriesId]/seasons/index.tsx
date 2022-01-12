import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../../../components/layout/layout';
import prisma from '../../../../lib/PrismaClient/prisma';
import Head from 'next/head';
import { Season } from '@prisma/client';

interface IParams extends ParsedUrlQuery {
  seriesId: string;
}

export const SeasonsPage = ({
  seasons,
}: {
  seasons: Season[];
}): JSX.Element => {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>
            {`${seasons?.[0]?.title} - Seasons` || process.env.APP_SITE_NAME}
          </title>
        </Head>
        <article>
          <h1>Seasons Page</h1>
        </article>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const seasons = await prisma.season.findMany({
      include: {
        series: true,
        episodeIds: true,
      },
    });
    return {
      paths: seasons.map((s) => {
        return {
          params: { seriesId: String(s?.id) || '' },
        };
      }),
      fallback: 'blocking',
    };
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { seriesId } = params as IParams;
  let seasons = await prisma.season.findMany({
    where: {
      series: {
        imdbID: seriesId,
      },
    },
    include: {
      series: true,
      episodeIds: true,
    },
  });
  const seasonsStr = JSON.stringify(seasons);
  seasons = JSON.parse(seasonsStr);

  return {
    props: {
      seasons: seasons,
    },
  };
};

export default SeasonsPage;
