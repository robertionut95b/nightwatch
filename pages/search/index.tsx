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
import { Spinner } from '../../components/utils/layout/spinners/spinner';
import Head from 'next/head';
import SearchedSeriesCard from '../../components/items/series/searched/SearchedSeriesCard';
import { OMDBSearchSeries } from '../../src/utils/convertors/OMDBSearchSeries';
import { OMDBSearchMovie } from '../../src/utils/convertors/OMDBSearchMovies';
import SearchedMoviesCard from '../../components/items/movies/searched/card/SearchedMovieCard';
import Link from 'next/link';
import { createStandaloneToast } from '@chakra-ui/react';
import { toastDefaults } from '../../assets/constants/config';
import prisma from 'lib/PrismaClient/prisma';
import { Movie, Serie } from '@prisma/client';

export default function SearchResults({
  movies,
  series,
}: {
  movies: Movie[];
  series: Serie[];
}): JSX.Element {
  const [session] = useSession();
  const router = useRouter();
  const { query } = router;
  const [omdbSeries, setOmdbSeries] = useState<OMDBSearchSeries[]>([]);
  const [omdbMovies, setOmdbMovies] = useState<OMDBSearchMovie[]>([]);
  const toast = createStandaloneToast();

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

  const [createSerieSearchMutation, { loading }] = useCreateSerieSearchMutation(
    {
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
            title: Array.isArray(query.q)
              ? query.q.join(' | ')
              : query.q?.replaceAll(' ', ' | '),
          },
        },
      ],
    },
  );

  const [createMovieSearchMutation, { loading: loadingMovies }] =
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
            title: Array.isArray(query.q)
              ? query.q.join(' | ')
              : query.q?.replaceAll(' ', ' | '),
          },
        },
      ],
    });

  const searchOMDBAPISeries = async (q: string): Promise<void> => {
    setOmdbSeries([]);
    try {
      const searchedSeries = await OMDBApiUtils.fetchOMDBSeriesBySearchTitle(q);
      if (searchedSeries) {
        setOmdbSeries([...omdbSeries, ...searchedSeries]);
      }
    } catch (err) {
      console.error(err);
      alert('Unfortunately the request has failed. Try again later');
    }
  };

  const searchOMDBAPIMovies = async (q: string): Promise<void> => {
    setOmdbMovies([]);
    try {
      const searchedMovies = await OMDBApiUtils.fetchOMDBMoviesBySearchTitle(q);
      if (searchedMovies) {
        setOmdbMovies([...omdbMovies, ...searchedMovies]);
      }
    } catch (err) {
      console.error(err);
      alert('Unfortunately the request has failed. Try again later');
    }
  };

  const createOMDBSeries = async (id: string): Promise<void> => {
    if (series.filter((s) => s.imdbID === id).length > 0) {
      alert('Series already exist');
      return;
    }
    try {
      const searchedSeries = await OMDBApiUtils.fetchOMDBSeriesByID(id);
      if (searchedSeries) {
        await createSerieSearchMutation({
          variables: {
            ...searchedSeries.toCreateVariables(),
          },
        });
      }
    } catch (err) {
      console.error(err);
      alert('Unfortunately the request has failed. Try again later');
    }
  };

  const createOMDBMovies = async (id: string): Promise<void> => {
    if (movies.filter((m) => m.imdbID === id).length > 0) {
      alert('Movie already exist');
      return;
    }
    try {
      const searchedMovie = await OMDBApiUtils.fetchOMDBMovieByID(id);
      if (searchedMovie) {
        await createMovieSearchMutation({
          variables: {
            ...searchedMovie.toCreateVariables(),
          },
        });
      }
    } catch (err) {
      console.error(err);
      alert('Unfortunately the request has failed. Try again later');
    }
  };

  useEffect(() => {
    setOmdbMovies([]);
    setOmdbSeries([]);
  }, [query.q]);

  useEffect(() => {
    if (loading || loadingMovies) NProgress.start();
    if (!loading || loadingMovies) NProgress.done();
  }, [loading, loadingMovies]);

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
            <div className="search-results grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
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
            <div className="search-results grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
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
          <button
            type="button"
            className="btn-primary-outline mt-4 disabled:bg-zinc-600"
            disabled={loading || loadingMovies}
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
            }}
          >
            Find more
          </button>
          <p className="mt-2 text-center">
            Keep typing to get more precise results
          </p>
        </div>
        {omdbMovies?.length > 0 && (
          <>
            <p className="mt-16 text-primarytext-lg font-bold">
              Movies from IMDB
            </p>
            <div className="search-results-ombdb grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-12">
              {omdbMovies?.map((m, idx) => (
                <SearchedMoviesCard
                  movie={m}
                  key={idx}
                  createMovieCb={createOMDBMovies}
                  disabled={loadingMovies}
                />
              ))}
            </div>
            {loadingMovies ? <Spinner /> : null}
          </>
        )}
        {omdbSeries?.length > 0 && (
          <>
            <p className="mt-16 text-primarytext-lg font-bold">
              Series from IMDB
            </p>
            <div className="search-results-ombdb grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-12">
              {omdbSeries?.map((s, idx) => (
                <SearchedSeriesCard
                  series={s}
                  key={idx}
                  createSerieCb={createOMDBSeries}
                  disabled={loading}
                />
              ))}
            </div>
            {loading ? <Spinner /> : null}
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
