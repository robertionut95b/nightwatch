import { Episode, Season, Serie } from '@prisma/client';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@components/layout/layout';
import prisma from '../../../../../../lib/PrismaClient/prisma';
import EpisodeDetailsCard from '@components/items/episodes/details/EpisodeCardDetails';

interface IParams extends ParsedUrlQuery {
  seriesId: string;
  seasonId: string;
  episodeId: string;
}

export const EpisodePage = ({
  episode,
}: {
  episode: Episode & {
    season: Season & {
      series: Serie;
    };
  };
}): JSX.Element => {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{`${episode.title} - ${process.env.APP_SITE_NAME} || ${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <article>
          <EpisodeDetailsCard episode={episode} />
        </article>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const episodes = await prisma.episode.findMany({
      include: {
        season: true,
      },
    });
    const paths = episodes.map((e) => {
      return {
        params: {
          seriesId: e.season.seriesId.toString(),
          seasonId: e.season.id.toString(),
          episodeId: String(e?.imdbID) || '',
        },
      };
    });

    return {
      paths,
      fallback: 'blocking',
    };
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { episodeId } = params as IParams;

  let episode = await prisma.episode.findUnique({
    where: {
      imdbID: episodeId,
    },
    include: {
      season: {
        include: {
          series: true,
        },
      },
    },
  });

  const episodeStr = JSON.stringify(episode);
  episode = JSON.parse(episodeStr);

  if (!episode) {
    return { notFound: true };
  }

  return {
    props: {
      episode: episode,
    },
  };
};

export default EpisodePage;
