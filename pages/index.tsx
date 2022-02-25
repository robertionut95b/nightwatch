import Head from 'next/head';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import MovieCard from '../components/items/movies/card/MovieCard';
import SeriesCard from '../components/items/series/card/SeriesCard';
import { cfg } from '../assets/constants/config';
import prisma from 'lib/PrismaClient/prisma';
import { Movie, Serie } from '@prisma/client';
import { Genre } from '../generated/graphql';

export default function Home({
  movies,
  series,
  genres,
}: {
  movies: Movie[];
  series: Serie[];
  genres: Genre[];
}): JSX.Element | null {
  return (
    <Layout home>
      <Head>
        <title>{process.env.APP_SITE_NAME}</title>
      </Head>
      <section className="main-wrapper">
        <h2 className="mb-4 text-lg font-bold">
          <Link href="/genres">Genres</Link>
        </h2>
        <div className="genres mt-2 mb-8">
          <div className="mb-4 flex flex-row flex-wrap gap-3">
            {genres.map((g, idx) => (
              <span key={idx} className="rounded-lg border border-solid px-1.5">
                <Link href={`/movies?g=${g?.name}`}>{g?.name}</Link>
              </span>
            ))}
          </div>
        </div>
        <h2 className="mb-4 text-lg font-bold">
          <Link href="/movies">Movies</Link>
        </h2>
        <section className="latest-movies-section grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-12 xl:grid-cols-6">
          {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </section>
        <h2 className="mt-8 mb-4 text-lg font-bold">
          <Link href="/series">Series</Link>
        </h2>
        <section className="latest-series-section grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-12 xl:grid-cols-6">
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

  const genres = await prisma.genre.findMany({});

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
      series: JSON.parse(JSON.stringify(series)),
      genres: JSON.parse(JSON.stringify(genres)),
    },
    revalidate: 60,
  };
};
