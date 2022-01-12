import {
  Episode,
  EpisodesWatchlist,
  Movie,
  MoviesWatchlist,
  Season,
  Serie,
  SeriesWatchlist,
  Watchlist,
  WatchlistedEpisode,
  WatchlistedMovie,
  WatchlistedSerie,
} from '@prisma/client';
import Head from 'next/head';
import Layout from '../../../components/layout/layout';
import { GetServerSideProps } from 'next';
import prisma from '../../../lib/PrismaClient/prisma';
import WatchlistComponent from '../../../components/items/watchlists/Watchlist';
import { getSession } from 'next-auth/client';

export interface WatchlistsPageProps {
  watchlist:
    | Watchlist & {
        episodeWatchlist:
          | (EpisodesWatchlist & {
              episodes: (WatchlistedEpisode & {
                episode: Episode & {
                  season: Season & {
                    series: { imdbID: string };
                  };
                };
              })[];
            })
          | null;
        movieWatchlist:
          | (MoviesWatchlist & {
              movies: (WatchlistedMovie & {
                movie: Movie;
              })[];
            })
          | null;
        seriesWatchlist:
          | (SeriesWatchlist & {
              series: (WatchlistedSerie & {
                serie: Serie;
              })[];
            })
          | null;
      };
}

export default function WatchlistsPage({
  watchlist,
}: WatchlistsPageProps): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Watchlists - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <section>
        <div className="flex flex-col">
          {watchlist ? (
            <WatchlistComponent watchlist={watchlist} />
          ) : (
            <h2 className="text-lg font-bold">No data found</h2>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const session = await getSession();
  const watchlist = await prisma.watchlist.findFirst({
    where: {
      default: true,
      user: {
        email: session?.user?.email || undefined,
      },
    },
    include: {
      episodeWatchlist: {
        include: {
          episodes: {
            include: {
              episode: {
                include: {
                  season: {
                    include: {
                      series: {
                        select: {
                          imdbID: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      movieWatchlist: {
        include: {
          movies: {
            include: {
              movie: true,
            },
          },
        },
      },
      seriesWatchlist: {
        include: {
          series: {
            include: {
              serie: true,
            },
          },
        },
      },
    },
  });
  const watchlistStr = JSON.stringify(watchlist);

  return {
    props: {
      watchlist: JSON.parse(watchlistStr),
    },
  };
};
