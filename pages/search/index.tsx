import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/layout';
import apolloClient from '../../lib/apollo/apolloClient';
import MovieCard from '../../components/items/MovieCard';
import {
  SearchMovieByTitleDocument,
  SearchMovieByTitleQuery,
  SearchMovieByTitleQueryVariables,
  SearchSeriesByTitleQuery,
  SearchSeriesByTitleQueryVariables,
  SearchSeriesByTitleDocument,
  useCreateSerieSearchMutation,
  CreateSerieSearchMutation,
  useCreateMovieSearchMutation,
  CreateMovieSearchMutation,
} from '../../generated/graphql';
import SeriesCard from '../../components/items/SeriesCard';
import { OMDBApiUtils } from '../../src/utils/convertors/OMDBApiUtils';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { ApolloError } from '@apollo/client';
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import { Spinner } from '../../components/utils/spinner';
import Head from 'next/head';
import SearchedSeriesCard from '../../components/items/SearchedSeriesCard';
import { OMDBSearchSeries } from '../../src/utils/convertors/OMDBSearchSeries';
import { OMDBSearchMovie } from '../../src/utils/convertors/OMDBSearchMovies';
import SearchedMoviesCard from '../../components/items/SearchedMovieCard';
import Link from 'next/link';

export default function SearchResults({
  movies,
  series,
}: {
  movies: SearchMovieByTitleQuery['movies'];
  series: SearchSeriesByTitleQuery['series'];
}): JSX.Element {
  const [session] = useSession();
  const router = useRouter();
  const { query } = router;
  const [omdbSeries, setOmdbSeries] = useState<OMDBSearchSeries[]>([]);
  const [omdbMovies, setOmdbMovies] = useState<OMDBSearchMovie[]>([]);

  const [createSerieSearchMutation, { loading }] = useCreateSerieSearchMutation(
    {
      fetchPolicy: 'no-cache',
      onError: (error: ApolloError) => {
        console.error(error);
        alert('Could not add series, try again later');
      },
      onCompleted: (data: CreateSerieSearchMutation) => {
        alert(`Serie ${data.createSerie.title} created`);
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
        alert('Could not add movie, try again later');
      },
      onCompleted: (data: CreateMovieSearchMutation) => {
        alert(`Movie ${data.createMovie.title} created`);
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
      <div className="flex flex-col gap-y-4">
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
            className="btn-primary mt-4"
            onClick={() => {
              if (!session) {
                alert('You must login first');
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
  const searchQuery: string | undefined = Array.isArray(query.q)
    ? query.q.join(' | ')
    : query.q?.replaceAll(' ', ' | ');

  const { data, error } = await apolloClient.query<
    SearchMovieByTitleQuery,
    SearchMovieByTitleQueryVariables
  >({
    fetchPolicy: 'no-cache',
    query: SearchMovieByTitleDocument,
    variables: { title: searchQuery || '' },
  });

  if (error) console.error(error);
  const movies = data?.movies || [];

  const { data: seriesData, error: seriesError } = await apolloClient.query<
    SearchSeriesByTitleQuery,
    SearchSeriesByTitleQueryVariables
  >({
    fetchPolicy: 'no-cache',
    query: SearchSeriesByTitleDocument,
    variables: { title: searchQuery || '' },
  });

  if (seriesError) console.error(error);
  const series = seriesData?.series || [];

  return {
    props: {
      movies: movies,
      series: series,
    },
  };
};
