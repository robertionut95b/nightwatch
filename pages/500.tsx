import Head from 'next/head';
import Layout from '../components/layout/layout';

const Error500 = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <h4>Internal Server Error</h4>
    </Layout>
  );
};

export default Error500;
