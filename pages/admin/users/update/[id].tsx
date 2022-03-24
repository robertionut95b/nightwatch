import Layout from '@components/layout/layout';
import { Role, User } from '@prisma/client';
import prisma from 'lib/PrismaClient/prisma';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { ParsedUrlQuery } from 'querystring';
import Breadcrumbs from '../../../../components/layout/breadcrumbs/index';
import UserForm from '@components/user/UserForm';

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const AdminUserUpdatePage = ({ user }: { user: User }): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>User update - {process.env.APP_SITE_NAME}</title>
      </Head>
      <div className="breadcrumbs mb-6">
        <Breadcrumbs
          includeHome={false}
          items={[
            { href: '/admin', label: 'Admin' },
            { href: '/admin/users', label: 'Users' },
            {
              href: `/admin/users/update/${user.id}`,
              label: user.email,
            },
          ]}
        />
      </div>
      <article className="movie-form">
        <h2 className="mb-4 text-2xl font-bold">Update user</h2>
        <UserForm user={user} />
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const { params } = context;
  const { id } = params as IParams;

  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) return { notFound: true };

  return {
    props: {
      session: ses,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};

export default AdminUserUpdatePage;
