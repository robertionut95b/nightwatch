import Layout from '@components/layout/layout';
import { Role } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import Breadcrumbs from '../../../../components/layout/breadcrumbs/index';
import UserForm from '../../../../components/user/UserForm';

export const AdminUserCreatePage = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Create user - {process.env.APP_SITE_NAME}</title>
      </Head>
      <div className="breadcrumbs mb-6">
        <Breadcrumbs
          includeHome={false}
          items={[
            { href: '/admin', label: 'Admin' },
            { href: '/admin/users', label: 'Users' },
            {
              href: `/admin/users/create`,
              label: 'New user',
            },
          ]}
        />
      </div>
      <article className="user-form">
        <h2 className="mb-4 text-2xl font-bold">Create user</h2>
        <UserForm />
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);

  const appSession = ses as AppSession;

  if (!appSession || appSession?.role !== Role.ADMIN)
    return { redirect: { destination: '/', permanent: false } };

  return {
    props: {
      session: ses,
    },
  };
};

export default AdminUserCreatePage;
