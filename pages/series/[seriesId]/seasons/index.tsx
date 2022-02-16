import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../../../components/layout/layout';
import prisma from '../../../../lib/PrismaClient/prisma';
import Head from 'next/head';
import { Episode, Season, Serie } from '@prisma/client';
import SeriesCard from '../../../../components/items/series/card/SeriesCard';

interface IParams extends ParsedUrlQuery {
  seriesId: string;
}

export const SeasonsPage = ({
  seasons,
}: {
  seasons: (Season & {
    series: Serie;
    episodeIds: Episode[];
  })[];
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
          <h2 className="font-bold text-3xl mb-4">{`${seasons?.[0]?.series?.title}`}</h2>
          <h4 className="font-normal text-2xl mb-8">Seasons</h4>
          <div className="seasons grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-x-6 gap-y-2 md:flex-wrap">
            {seasons?.map((season) => (
              <div
                key={season.id}
                className="series-card flex flex-col items-center"
              >
                <SeriesCard series={season.series} />
                <span>{`Season ${season.index}`}</span>
              </div>
            ))}
          </div>
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
