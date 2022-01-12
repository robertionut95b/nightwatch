import Head from 'next/head';
import Layout from '../../../../../components/layout/layout';

export const SeasonPage = (): JSX.Element => {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{`${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <article>
          <h1>Season Page</h1>
        </article>
      </Layout>
    </>
  );
};

export default SeasonPage;
