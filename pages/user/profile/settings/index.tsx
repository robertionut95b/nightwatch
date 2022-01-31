import Head from 'next/head';
import Layout from '../../../../components/layout/layout';
import { MenuNavigationComponent } from '../../../../components/user/MenuNavigation';
import { SettingsForm } from '../../../../components/user/SettingsForm';

export const Profile = (): JSX.Element => {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{`Settings - ${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <section>
          <div className="wrapper flex flex-col md:flex-row gap-y-4 gap-x-4">
            <div className="menu-container-sidebar w-full md:w-1/4 p-4 bg-white dark:bg-background-dark h-min rounded border border-gray-800">
              <MenuNavigationComponent />
            </div>
            <div className="page-container w-full md:w-3/4 border border-gray-800 rounded-lg p-4">
              <SettingsForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Profile;
