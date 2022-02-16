import Head from 'next/head';
import Layout from '../../../../../../components/layout/layout';
import { GetServerSideProps } from 'next';
import prisma from 'lib/PrismaClient/prisma';
import { ParsedUrlQuery } from 'querystring';
import { Episode, Serie } from '@prisma/client';
import EpisodeCard from '@components/items/episodes/card/EpisodeCard';
import { useRouter } from 'next/router';
import SeriesCard from '../../../../../../components/items/series/card/SeriesCard';
import { getSession } from 'next-auth/client';

interface IQueryParams extends ParsedUrlQuery {
  seriesId: string;
  seasonId: string;
}

export const EpisodesPage = ({
  episodes,
  series,
}: {
  episodes: Episode[];
  series: Serie;
}): JSX.Element => {
  const router = useRouter();
  const { seasonId } = router.query;

  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{`${series.title} - Season ${seasonId} - ${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <article>
          <div className="header flex flex-col gap-y-8 mb-2">
            <div className="header-card md:max-w-min">
              <SeriesCard series={series} />
            </div>
            <div className="header-title">
              <h4 className="mb-4 font-bold text-3xl">{`Season ${seasonId} episodes`}</h4>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-x-6 gap-y-2 md:flex-wrap">
            {episodes.map((episode) => (
              <EpisodeCard
                key={episode.imdbID}
                seriesImdbID={series.imdbID}
                episode={episode}
                season={{ index: parseInt(seasonId as string) }}
              />
            ))}
          </div>
        </article>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { seriesId, seasonId } = ctx.query as IQueryParams;
  const session = await getSession(ctx);
  const episodes = await prisma.episode.findMany({
    where: {
      AND: [
        {
          season: {
            series: {
              imdbID: {
                equals: seriesId,
              },
            },
          },
        },
        {
          season: {
            index: parseInt(seasonId),
          },
        },
      ],
    },
  });
  const series = await prisma.serie.findUnique({
    where: {
      imdbID: seriesId,
    },
  });

  if (episodes?.length === 0) {
    return {
      redirect: { destination: `/series/${seriesId}`, permanent: false },
    };
  }

  return {
    props: {
      episodes: JSON.parse(JSON.stringify(episodes)),
      series: JSON.parse(JSON.stringify(series)),
      session,
    },
  };
};

export default EpisodesPage;
