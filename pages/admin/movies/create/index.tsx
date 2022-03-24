import Layout from '@components/layout/layout';
import { Genre, Language, Role } from '@prisma/client';
import prisma from 'lib/PrismaClient/prisma';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import MovieForm from '@components/items/movies/form/form';
import Breadcrumbs from '../../../../components/layout/breadcrumbs/index';

export const AdminMovieCreatePage = ({
  genres,
  languages,
}: {
  genres: Genre[];
  languages: Language[];
}): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Create movie - {process.env.APP_SITE_NAME}</title>
      </Head>
      <div className="breadcrumbs mb-6">
        <Breadcrumbs
          includeHome={false}
          items={[
            { href: '/admin', label: 'Admin' },
            { href: '/admin/movies', label: 'Movies' },
            {
              href: `/admin/movies/create`,
              label: 'New movie',
            },
          ]}
        />
      </div>
      <article className="movie-form">
        <h2 className="mb-4 text-2xl font-bold">Create movie</h2>
        <MovieForm genres={genres} languages={languages} />
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);

  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const [genres, languages] = await prisma.$transaction([
    prisma.genre.findMany({}),
    prisma.language.findMany({}),
  ]);

  return {
    props: {
      session: ses,
      genres: JSON.parse(JSON.stringify(genres)),
      languages: JSON.parse(JSON.stringify(languages)),
    },
  };
};

export default AdminMovieCreatePage;
