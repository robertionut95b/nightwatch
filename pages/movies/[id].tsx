import Layout from '../../components/layout/layout';
import Head from 'next/head';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MovieDetailsCard from '../../components/items/movies/details/MovieDetailsCard';
import { Movie } from '../../generated/graphql';
import prisma from '../../lib/PrismaClient/prisma';
import {
  Actor,
  Director,
  Genre,
  Language,
  Comment,
  Role,
} from '@prisma/client';

interface IParams extends ParsedUrlQuery {
  id: string;
}

export default function MoviePage({
  movie,
  relatedMovies,
  totalRating,
}: {
  movie: Movie & {
    genres: Genre[];
    actors: Actor[];
    directors: Director[];
    languages: Language[];
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
  relatedMovies: Movie[];
  totalRating: number;
}): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <article>
        <MovieDetailsCard
          movie={movie}
          relatedMovies={relatedMovies}
          totalRating={totalRating}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const movies = await prisma.movie.findMany({
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

  let movie = await prisma.movie.findUnique({
    where: {
      imdbID: id,
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
      userRating: {
        select: {
          rating: true,
        },
      },
    },
  });

  if (!movie) {
    return { notFound: true };
  }

  const movieStr = JSON.stringify(movie);
  movie = JSON.parse(movieStr);

  let relatedMovies = await prisma.movie.findMany({
    where: {
      imdbID: { not: id },
      genres: {
        every: {
          name: {
            in: movie?.genres?.map((g) => {
              return g.name;
            }),
            mode: 'insensitive',
          },
        },
      },
    },
  });

  const relatedMoviesStr = JSON.stringify(relatedMovies);
  relatedMovies = JSON.parse(relatedMoviesStr);

  let totalRating = 0;

  if (movie) {
    totalRating =
      movie?.userRating.reduce((total, next) => total + next.rating, 0) /
      movie?.userRating.length;
  }

  return {
    props: {
      movie,
      relatedMovies: relatedMovies,
      totalRating,
    },
    revalidate: 60,
  };
};
