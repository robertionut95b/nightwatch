import Head from 'next/head';
import Layout from '../../../../../../components/layout/layout';

export const EpisodesPage = (): JSX.Element => {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>{`${process.env.APP_SITE_NAME}`}</title>
        </Head>
        <article>
          <h1>Episodes Page</h1>
        </article>
      </Layout>
    </>
  );
};

export default EpisodesPage;
