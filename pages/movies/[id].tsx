import Layout from '../../components/layout/layout';
import Head from 'next/head';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MovieDetailsCard from '../../components/items/MovieDetailsCard';
import { Movie } from '../../generated/graphql';
import prisma from '../../lib/PrismaClient/prisma';

interface IParams extends ParsedUrlQuery {
  id: string,
}

export default function MoviePage({ movie, relatedMovies }: { movie: Movie, relatedMovies: Movie[] }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <article>
        <MovieDetailsCard movie={movie} relatedMovies={relatedMovies} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const movies = await prisma.movie.findMany({
    include: {
      genres: true,
      actors: true,
      directors: true,
      languages: true,
    },
  });
  return {
    paths: movies.map((m) => {
      return {
        params: { id: String(m?.imdbID) || '' },
      };
    }),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;

  var movie = await prisma.movie.findUnique({
    where: {
      imdbID: id,
    },
    include: {
      genres: true,
      actors: true,
      directors: true,
      languages: true,
    },
  });

  const movieStr = JSON.stringify(movie);
  movie = JSON.parse(movieStr);

  var relatedMovies = await prisma.movie.findMany({
    where: {
      imdbID: { not: id },
      genres: {
        every: {
          name: {
            in: movie?.genres?.map((g) => { return g.name; }),
            mode: 'insensitive',
          },
        },
      },
    },
  });

  const relatedMoviesStr = JSON.stringify(relatedMovies);
  relatedMovies = JSON.parse(relatedMoviesStr);

  return {
    props: {
      movie: movie,
      relatedMovies: relatedMovies,
    },
  };
};