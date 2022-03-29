import Layout from '@components/layout/layout';
import DateComponent from '@components/utils/helpers/date';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import prisma from 'lib/PrismaClient/prisma';
import { Role, User } from '@prisma/client';
import NTable from '@components/tables/table';
import { cfg } from 'assets/constants/config';
import { useRouter } from 'next/router';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import Breadcrumbs from '@components/layout/breadcrumbs';

export default function UsersPage({
  users,
  total,
}: {
  users: User[];
  total: number;
}): JSX.Element {
  const { push, pathname, query } = useRouter();

  return (
    <Layout>
      <Head>
        <title>Users - {process.env.APP_SITE_NAME}</title>
      </Head>
      <div className="breadcrumbs mb-6">
        <Breadcrumbs
          includeHome={false}
          items={[
            { href: '/admin', label: 'Admin' },
            { href: '/admin/users', label: 'Users' },
          ]}
        />
      </div>
      <article className="users">
        <NTable
          title="Users"
          cols={[
            {
              id: 'id',
            },
            {
              id: 'username',
            },
            {
              id: 'email',
            },
            {
              id: 'role',
            },
            {
              id: 'createdAt',
              label: 'Created',
              accesor: (user: User) => (
                <DateComponent dateString={user.createdAt.toString()} />
              ),
            },
            {
              id: 'updatedAt',
              label: 'Updated',
              accesor: (user: User) => (
                <DateComponent dateString={user.updatedAt.toString()} />
              ),
            },
          ]}
          data={users}
          totalItems={total}
          onPageChange={(p) => push({ pathname, query: { ...query, p } })}
          createRowLink={() => `/admin/users/create`}
          updateRowLink={(u) => `/admin/users/update/${u.id}`}
          deleteRowLink={(u) => `/admin/users/delete/${u.id}`}
          onFilter={(u) => push({ pathname, query: { u } })}
        />
      </article>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const {
    query: { p, u },
  } = context;

  const username = Array.isArray(u) ? u.join(' ') : u;
  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const skip = p
    ? (parseInt(p as string) - 1) * cfg.API_ITEMS_PAGINATION_COUNT
    : 0;

  const [total, users] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      where: {
        username: {
          contains: username,
          mode: 'insensitive',
        },
      },
      take: cfg.API_ITEMS_PAGINATION_COUNT,
      skip,
    }),
  ]);

  return {
    props: {
      session: ses,
      users: JSON.parse(JSON.stringify(users)),
      total: u ? users.length : total,
    },
  };
};
