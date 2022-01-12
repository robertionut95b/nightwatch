import Head from 'next/head';
import Layout from '../../components/layout/layout';

const VerifyRequest = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Verify request - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <p>
        {' '}
        An email has been sent to you, please click the link and authenticate
        before continuing
      </p>
    </Layout>
  );
};
export default VerifyRequest;
