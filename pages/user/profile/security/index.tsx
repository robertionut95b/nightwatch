import Head from 'next/head';
import Layout from '../../../../components/layout/layout';
import Sidebar from '@components/user/Sidebar';
import SecurityForm from '../../../../components/user/SecurityForm';

export const Profile = (): JSX.Element => {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{`Account security - ${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <section>
          <div className="wrapper flex flex-col md:flex-row gap-y-4 gap-x-4">
            <Sidebar />
            <div className="page-container w-full md:w-3/4 border border-gray-800 rounded-lg p-4">
              <SecurityForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Profile;
