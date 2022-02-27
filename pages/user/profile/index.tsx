import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Layout from '../../../components/layout/layout';
import ProfileForm from '../../../components/user/ProfileForm';
import Sidebar from '../../../components/user/Sidebar';

export const Profile = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Profile - ${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <section>
          <div className="wrapper flex flex-col md:flex-row gap-y-4 gap-x-4">
            <Sidebar />
            <div className="page-container w-full md:w-3/4 border border-gray-800 rounded-lg p-4">
              <ProfileForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) return { redirect: { destination: '/', permanent: false } };

  return {
    props: {},
  };
};
