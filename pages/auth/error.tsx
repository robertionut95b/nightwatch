import Layout from '../../components/layout/layout';
import Head from 'next/head';

const AuthError = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <p> Unfortunately your login has failed. </p>
    </Layout>
  );
};

export default AuthError;
