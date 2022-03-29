import Layout from '@components/layout/layout';
import { Genre, Language, Movie, Role } from '@prisma/client';
import prisma from 'lib/PrismaClient/prisma';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { ParsedUrlQuery } from 'querystring';
import MovieForm from '@components/items/movies/form/form';
import Breadcrumbs from '../../../../components/layout/breadcrumbs/index';

interface IParams extends ParsedUrlQuery {
  imdbID: string;
}

export const AdminMovieUpdatePage = ({
  movie,
  genres,
  languages,
}: {
  movie: Movie & {
    genres: Genre[];
    languages: Language[];
  };
  genres: Genre[];
  languages: Language[];
}): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>
          {movie.title} - {process.env.APP_SITE_NAME}
        </title>
      </Head>
      <div className="breadcrumbs mb-6">
        <Breadcrumbs
          includeHome={false}
          items={[
            { href: '/admin', label: 'Admin' },
            { href: '/admin/movies', label: 'Movies' },
            {
              href: `/admin/movies/update/${movie.imdbID}`,
              label: movie.title,
            },
          ]}
        />
      </div>
      <article className="movie-form">
        <h2 className="mb-4 text-2xl font-bold">{movie.title}</h2>
        <MovieForm movie={movie} genres={genres} languages={languages} />
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const { params } = context;
  const { imdbID } = params as IParams;

  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const [movie, genres, languages] = await prisma.$transaction([
    prisma.movie.findUnique({
      where: {
        imdbID: imdbID,
      },
      include: {
        genres: true,
        languages: true,
      },
    }),
    prisma.genre.findMany({}),
    prisma.language.findMany({}),
  ]);

  if (!movie) return { notFound: true };

  return {
    props: {
      session: ses,
      movie: JSON.parse(JSON.stringify(movie)),
      genres: JSON.parse(JSON.stringify(genres)),
      languages: JSON.parse(JSON.stringify(languages)),
    },
  };
};

export default AdminMovieUpdatePage;
