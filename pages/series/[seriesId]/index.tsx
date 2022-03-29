import Layout from '../../../components/layout/layout';
import Head from 'next/head';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import SeriesDetailsCard from '../../../components/items/series/details/SeriesDetailsCard';
import prisma from '../../../lib/PrismaClient/prisma';
import {
  Actor,
  Director,
  Episode,
  Genre,
  Language,
  Role,
  Season,
  Serie,
  Comment,
} from '@prisma/client';

interface IParams extends ParsedUrlQuery {
  seriesId: string;
}

export default function SeriesPage({
  series,
  relatedSeries,
  totalRating,
}: {
  series: Serie & {
    genres: Genre[];
    actors: Actor[];
    directors: Director[];
    languages: Language[];
    seasons: (Season & {
      episodeIds: Episode[];
    })[];
    comments: (Comment & {
      user: {
        email: string;
        image: string | null;
        role: Role;
      };
      comments: (Comment & {
        user: {
          email: string;
          image: string | null;
          role: Role;
        };
      })[];
    })[];
  };
  relatedSeries: Serie[];
  totalRating: number;
}): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>{series.title}</title>
      </Head>
      <article>
        <SeriesDetailsCard
          series={series}
          relatedSeries={relatedSeries}
          totalRating={totalRating}
        />
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
      comments: {
        where: {
          active: true,
          parent: {
            is: null,
          },
        },
        include: {
          user: {
            select: {
              email: true,
              image: true,
              role: true,
            },
          },
          comments: {
            include: {
              user: {
                select: {
                  email: true,
                  image: true,
                  role: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
      },
      seasons: {
        include: {
          episodeIds: true,
        },
      },
      userRating: {
        select: {
          rating: true,
        },
      },
    },
  });

  if (!serie) {
    return { notFound: true };
  }

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

  let totalRating = 0;

  if (serie) {
    totalRating =
      serie?.userRating.reduce((total, next) => total + next.rating, 0) /
      serie?.userRating.length;
  }

  return {
    props: {
      series: serie,
      relatedSeries: relatedSeries,
      totalRating,
    },
    revalidate: 60,
  };
};
