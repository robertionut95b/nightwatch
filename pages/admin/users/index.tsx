import Layout from '@components/layout/layout';
import DateComponent from '@components/utils/helpers/date';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
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
  const { push, pathname } = useRouter();

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
        <h2 className="mb-4 text-2xl font-bold">Users</h2>
        <ShowIfElse if={users && users.length > 0} else={'No items to show'}>
          <div className="users mt-2">
            <NTable
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
                  accesor: (user: User) => (
                    <DateComponent dateString={user.createdAt.toString()} />
                  ),
                },
                {
                  id: 'updatedAt',
                  accesor: (user: User) => (
                    <DateComponent dateString={user.updatedAt.toString()} />
                  ),
                },
              ]}
              data={users}
              totalItems={total}
              onPageChange={(p) => push({ pathname, query: { p: p } })}
              createRowLink={() => `/admin/users/create`}
              updateRowLink={(u) => `/admin/users/update/${u.id}`}
              deleteRowLink={(u) => `/admin/users/delete/${u.id}`}
            />
          </div>
        </ShowIfElse>
      </article>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const {
    query: { p },
  } = context;

  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const skip = p
    ? (parseInt(p as string) - 1) * cfg.API_ITEMS_PAGINATION_COUNT
    : 0;

  const [total, users] = await prisma.$transaction([
    prisma.user.count(),
    prisma.user.findMany({
      take: cfg.API_ITEMS_PAGINATION_COUNT,
      skip,
    }),
  ]);

  return {
    props: {
      session: ses,
      users: JSON.parse(JSON.stringify(users)),
      total,
    },
  };
};
