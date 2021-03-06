import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/layout';
import MovieCard from '../../components/items/movies/card/MovieCard';
import {
  SearchMovieByTitleDocument,
  SearchSeriesByTitleDocument,
  useCreateSerieSearchMutation,
  CreateSerieSearchMutation,
  useCreateMovieSearchMutation,
  CreateMovieSearchMutation,
  CreateSeasonMutation,
  useCreateSeasonMutation,
} from '../../generated/graphql';
import SeriesCard from '../../components/items/series/card/SeriesCard';
import { OMDBApiUtils } from '../../src/utils/convertors/OMDBApiUtils';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { ApolloError } from '@apollo/client';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import Head from 'next/head';
import SearchedSeriesCard from '../../components/items/series/searched/SearchedSeriesCard';
import {
  IOMDBSearchSeries,
  OMDBSearchSeries,
} from '../../src/utils/convertors/OMDBSearchSeries';
import {
  IOMDBSearchMovie,
  OMDBSearchMovie,
} from '../../src/utils/convertors/OMDBSearchMovies';
import SearchedMoviesCard from '../../components/items/movies/searched/card/SearchedMovieCard';
import Link from 'next/link';
import { createStandaloneToast } from '@chakra-ui/react';
import { toastDefaults } from '../../assets/constants/config';
import prisma from 'lib/PrismaClient/prisma';
import { Movie, Serie } from '@prisma/client';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { useTheme } from 'next-themes';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import isEmptyObject from 'src/utils/objects/isEmptyObject';
import { OMDBMovie } from 'src/utils/convertors/OMDBMovie';
import { OMDBSeries } from 'src/utils/convertors/OMDBSeries';
import useMounted from '@components/layout/loading/loading';

export default function SearchResults({
  movies,
  series,
}: {
  movies: Movie[];
  series: Serie[];
}): JSX.Element {
  const [session, loading] = useSession();
  const router = useRouter();
  const { query } = router;
  const [omdbSeries, setOmdbSeries] = useState<OMDBSearchSeries[]>([]);
  const [omdbMovies, setOmdbMovies] = useState<OMDBSearchMovie[]>([]);
  const toast = createStandaloneToast();
  const [showFindMore, setShowFindMore] = useState<boolean>(true);
  const mounted = useMounted();

  const [createSeasonMutation] = useCreateSeasonMutation({
    fetchPolicy: 'no-cache',
    onError: (error: ApolloError) => {
      console.error(error);
      console.error('Could not add season, try again later');
    },
    onCompleted: (data: CreateSeasonMutation) => {
      console.log(`Season ${data.createSeason.index} created`);
      router.replace(router.asPath);
    },
  });

  const [createSerieSearchMutation, { loading: createSerieLoading }] =
    useCreateSerieSearchMutation({
      fetchPolicy: 'no-cache',
      onError: (error: ApolloError) => {
        console.error(error);
        toast({
          title: 'Could not add series, please try again later',
          status: 'error',
          ...toastDefaults,
        });
      },
      onCompleted: async (data: CreateSerieSearchMutation) => {
        // if series is created, add the seasons and episodes
        if (data.createSerie.totalSeasons > 0) {
          for (let i = 1; i <= data.createSerie.totalSeasons; i++) {
            const season =
              await OMDBApiUtils.fetchSeriesEpisodeBySeriesTitleAndSeason(
                data.createSerie.imdbID,
                i,
              );
            if (!season) continue;
            await createSeasonMutation({
              variables: {
                ...season.toCreateVariables(),
              },
            });
          }
        }
        toast({
          title: `Added series ${data.createSerie.title}`,
          status: 'success',
          ...toastDefaults,
        });
        router.replace(router.asPath);
      },
      refetchQueries: [
        {
          query: SearchSeriesByTitleDocument,
          variables: {
            title: Array.isArray(query.q) ? query.q.join(' ') : query.q,
          },
        },
      ],
    });

  const [createMovieSearchMutation, { loading: createMovieLoading }] =
    useCreateMovieSearchMutation({
      fetchPolicy: 'no-cache',
      onError: (error: ApolloError) => {
        console.error(error);
        toast({
          title: 'Could not add movie, please try again later',
          status: 'error',
          ...toastDefaults,
        });
      },
      onCompleted: (data: CreateMovieSearchMutation) => {
        toast({
          title: `Added movie ${data.createMovie.title}`,
          status: 'success',
          ...toastDefaults,
        });
        router.replace(router.asPath);
      },
      refetchQueries: [
        {
          query: SearchMovieByTitleDocument,
          variables: {
            title: Array.isArray(query.q) ? query.q.join(' ') : query.q,
          },
        },
      ],
    });

  const searchOMDBAPISeries = async (q: string): Promise<void> => {
    setOmdbSeries([]);
    const searchedSeriesResp = await fetch(
      `/api/omdb/series/search-by-title?t=${q}`,
    );
    const searchedSeriesJson: IOMDBSearchSeries[] =
      await searchedSeriesResp.json();

    const searchedSeries = searchedSeriesJson.map((s) =>
      OMDBSearchSeries.jsonToObject(s),
    );
    if (searchedSeries) {
      setOmdbSeries([...omdbSeries, ...searchedSeries]);
    }
  };

  const searchOMDBAPIMovies = async (q: string): Promise<void> => {
    setOmdbMovies([]);
    const searchedMoviesResp = await fetch(
      `/api/omdb/movies/search-by-title?t=${q}`,
    );

    const searchedMoviesJson: IOMDBSearchMovie[] =
      await searchedMoviesResp.json();

    const searchedMovies = searchedMoviesJson.map((s) =>
      OMDBSearchMovie.jsonToObject(s),
    );

    if (searchedMovies) {
      setOmdbMovies([...omdbMovies, ...searchedMovies]);
    }
  };

  const createOMDBSeries = async (id: string): Promise<void> => {
    if (series.filter((s) => s.imdbID === id).length > 0) {
      toast({
        title: 'Series already exists',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }
    toast({
      title: `Adding series. Please wait ...`,
      status: 'info',
      ...toastDefaults,
    });

    const searchedSeriesResp = await fetch(
      `/api/omdb/series/search-by-id?i=${id}`,
    );
    const searchedSeriesJson = await searchedSeriesResp.json();

    if (isEmptyObject(searchedSeriesJson)) {
      toast({
        title: 'Nothing found on OMDB',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }

    const searchedSeries = OMDBSeries.jsonToObject(searchedSeriesJson);

    if (searchedSeries) {
      await createSerieSearchMutation({
        variables: {
          ...searchedSeries.toCreateVariables(),
        },
      });
    }
  };

  const createOMDBMovies = async (id: string): Promise<void> => {
    if (movies.filter((m) => m.imdbID === id).length > 0) {
      toast({
        title: 'Movie already exists',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }
    toast({
      title: `Adding movie. Please wait ...`,
      status: 'info',
      ...toastDefaults,
    });

    const searchedMovieResp = await fetch(
      `/api/omdb/movies/search-by-id?i=${id}`,
    );
    const searchedMovieJson = await searchedMovieResp.json();

    if (isEmptyObject(searchedMovieJson)) {
      toast({
        title: 'Nothing found on OMDB',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }

    const searchedMovie = OMDBMovie.jsonToObject(searchedMovieJson);

    if (searchedMovie) {
      await createMovieSearchMutation({
        variables: {
          ...searchedMovie.toCreateVariables(),
        },
      });
    }
  };

  useEffect(() => {
    setOmdbMovies([]);
    setOmdbSeries([]);
  }, [query.q]);

  useEffect(() => {
    if (createSerieLoading || createMovieLoading) NProgress.start();
    if (!createSerieLoading || !createMovieLoading) NProgress.done();
  }, [createSerieLoading, createMovieLoading]);

  const { theme } = useTheme();

  return (
    <Layout home={false}>
      <Head>
        <title>
          Search {query.q as string} - {process.env.APP_SITE_NAME}
        </title>
      </Head>
      <div className="flex flex-col gap-y-4 text-black dark:text-white">
        {movies?.length > 0 && (
          <>
            <Link href="/movies" passHref>
              <p className="text-lg font-bold">Movies</p>
            </Link>
            <div className="search-results layout-grid">
              {movies?.map((m) => (
                <MovieCard movie={m} key={m.id} />
              ))}
            </div>
          </>
        )}
        {series?.length > 0 && (
          <>
            <Link href="/series" passHref>
              <p className="text-lg font-bold">Series</p>
            </Link>
            <div className="search-results layout-grid">
              {series?.map((s) => (
                <SeriesCard series={s} key={s.id} />
              ))}
            </div>
          </>
        )}
        {movies?.length === 0 && series?.length === 0 && (
          <span className="text-center">No entries found for your search</span>
        )}
        <div className="search-more mt-8 flex flex-col items-center gap-y-4">
          <p className="text-center">
            Not what you&apos;re looking for ? Extend the search towards the
            IMDB Database
          </p>
          <ShowIfElse
            if={!loading}
            else={
              <>
                {mounted &&
                  (theme === 'light' ? (
                    <MinimalSpinner color="black" />
                  ) : (
                    <MinimalSpinner color="text-white" />
                  ))}
              </>
            }
          >
            <ShowIf if={showFindMore}>
              <button
                type="button"
                className="btn-primary-outline mt-4 dark:text-white"
                disabled={loading || createMovieLoading}
                onClick={() => {
                  if (!session) {
                    toast({
                      title: 'Action not allowed. Must login',
                      status: 'error',
                      ...toastDefaults,
                    });
                    return;
                  }
                  searchOMDBAPISeries(query.q as string);
                  searchOMDBAPIMovies(query.q as string);
                  setShowFindMore(false);
                }}
              >
                <ShowIfElse
                  if={loading || createMovieLoading}
                  else={'Find more'}
                >
                  {mounted &&
                    (theme === 'light' ? (
                      <MinimalSpinner color="black" />
                    ) : (
                      <MinimalSpinner color="text-white" />
                    ))}
                </ShowIfElse>
              </button>
            </ShowIf>
          </ShowIfElse>
          <p className="mt-2 text-center">
            Keep typing to get more precise results
          </p>
        </div>
        {omdbMovies?.length > 0 && (
          <>
            <p className="text-primarytext-lg mt-16 font-bold">
              Movies from IMDB
            </p>
            <div className="search-results-ombdb grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
              {omdbMovies?.map((m, idx) => (
                <SearchedMoviesCard
                  movie={m}
                  key={idx}
                  createMovieCb={createOMDBMovies}
                  disabled={createMovieLoading}
                />
              ))}
            </div>
          </>
        )}
        {omdbSeries?.length > 0 && (
          <>
            <p className="text-primarytext-lg mt-16 font-bold">
              Series from IMDB
            </p>
            <div className="search-results-ombdb grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-12 xl:grid-cols-5">
              {omdbSeries?.map((s, idx) => (
                <SearchedSeriesCard
                  series={s}
                  key={idx}
                  createSerieCb={createOMDBSeries}
                  disabled={createSerieLoading}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  let searchQuery: string | string[] | undefined = query.q;
  if (Array.isArray(searchQuery)) {
    searchQuery = searchQuery.join(' ');
  }

  const movies = await prisma.movie.findMany({
    where: {
      title: {
        contains: searchQuery,
        mode: 'insensitive',
      },
    },
  });

  const series = await prisma.serie.findMany({
    where: {
      title: {
        contains: searchQuery,
        mode: 'insensitive',
      },
    },
  });

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
      series: JSON.parse(JSON.stringify(series)),
    },
  };
};
