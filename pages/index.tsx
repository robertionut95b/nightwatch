import Head from 'next/head';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import MovieCard from '../components/items/movies/card/MovieCard';
import { AllMoviesQuery, AllSeriesQuery } from '../generated/graphql';
import SeriesCard from '../components/items/series/card/SeriesCard';
import { cfg } from '../assets/constants/config';
import prisma from 'lib/PrismaClient/prisma';

export default function Home({
  movies,
  series,
}: {
  movies: AllMoviesQuery['movies'];
  series: AllSeriesQuery['series'];
}): JSX.Element | null {
  return (
    <Layout home>
      <Head>
        <title>{process.env.APP_SITE_NAME}</title>
      </Head>
      <section className="main-wrapper">
        <h2 className="mb-4 text-lg font-bold">
          <Link href="/movies">Movies</Link>
        </h2>
        <section className="latest-movies-section grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
          {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </section>
        <h2 className="mt-8 mb-4 text-lg font-bold">
          <Link href="/series">Series</Link>
        </h2>
        <section className="latest-series-section grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
          {series.map((s) => (
            <SeriesCard series={s} key={s.id} />
          ))}
        </section>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const movies = await prisma.movie.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: cfg.API_ITEMS_PAGINATION_COUNT,
  });

  const series = await prisma.serie.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: cfg.API_ITEMS_PAGINATION_COUNT,
  });

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
      series: JSON.parse(JSON.stringify(series)),
    },
  };
};
