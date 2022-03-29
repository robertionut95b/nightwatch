import Layout from '@components/layout/layout';
import DateComponent from '@components/utils/helpers/date';
import { Movie, Role } from '@prisma/client';
import { cfg } from 'assets/constants/config';
import prisma from 'lib/PrismaClient/prisma';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import NTable from '../../../components/tables/table';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '@chakra-ui/react';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import Breadcrumbs from '@components/layout/breadcrumbs';

export const AdminMoviesPage = ({
  movies,
  total,
}: {
  movies: Movie[];
  total: number;
}): JSX.Element => {
  const { push, pathname, query } = useRouter();

  return (
    <Layout>
      <Head>
        <title>Movies - {process.env.APP_SITE_NAME}</title>
      </Head>
      <div className="breadcrumbs mb-6">
        <Breadcrumbs
          includeHome={false}
          items={[
            { href: '/admin', label: 'Admin' },
            { href: '/admin/movies', label: 'Movies' },
          ]}
        />
      </div>
      <article className="movies">
        <NTable
          title="Movies"
          cols={[
            {
              id: 'id',
            },
            {
              id: 'title',
              accesor: (movie: Movie) => (
                <div className="max-w-[50%] truncate">
                  <Tooltip label={movie.title} placement={'bottom-start'}>
                    <span>{movie.title}</span>
                  </Tooltip>
                </div>
              ),
            },
            {
              id: 'release',
              accesor: (movie: Movie) => (
                <DateComponent dateString={movie.release.toString()} />
              ),
            },
            {
              id: 'plot',
              accesor: (movie: Movie) => (
                <div className="max-w-xs truncate">
                  <Tooltip label={movie.plot} placement={'bottom-start'}>
                    <span>{movie.plot}</span>
                  </Tooltip>
                </div>
              ),
            },
            {
              id: 'poster',
              accesor: (movie: Movie) => (
                <div className="relative">
                  <Link href={movie?.poster} passHref>
                    <a>
                      <Image
                        className="cursor-pointer"
                        src={movie.poster}
                        width={18 * 2}
                        height={25 * 2}
                        alt="poster"
                        objectFit="cover"
                      ></Image>
                    </a>
                  </Link>
                </div>
              ),
            },
            {
              id: 'imdbRating',
            },
            {
              id: 'rating',
            },
            {
              id: 'imdbID',
            },
          ]}
          data={movies}
          totalItems={total}
          onPageChange={(p) => push({ pathname, query: { ...query, p } })}
          createRowLink={() => `/admin/movies/create`}
          updateRowLink={(m) => `/admin/movies/update/${m.imdbID}`}
          deleteRowLink={(m) => `/admin/movies/delete/${m.imdbID}`}
          onFilter={(t) => push({ pathname, query: { t } })}
        />
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const {
    query: { p, t },
  } = context;

  const title = Array.isArray(t) ? t.join(' ') : t;
  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const skip = p
    ? (parseInt(p as string) - 1) * cfg.API_ITEMS_PAGINATION_COUNT
    : 0;

  const [total, movies] = await prisma.$transaction([
    prisma.movie.count(),
    prisma.movie.findMany({
      take: cfg.API_ITEMS_PAGINATION_COUNT,
      skip,
      where: {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        genres: true,
        languages: true,
      },
    }),
  ]);

  return {
    props: {
      session: ses,
      movies: JSON.parse(JSON.stringify(movies)),
      total: t ? movies.length : total,
    },
  };
};

export default AdminMoviesPage;
