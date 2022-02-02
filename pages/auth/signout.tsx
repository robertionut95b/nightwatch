import { GetServerSideProps } from 'next';
import { signout, getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout from '../../components/layout/layout';

const SignOut = (): JSX.Element => {
  const [session] = useSession();

  useEffect(() => {
    if (session) signout();
  }, [session]);

  return (
    <Layout home={false}>
      <Head>
        <title>{`Sign out - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="container flex gap-y-8 justify-center items-center">
        <div className="info">
          <h4 className="font-bold text-xl tracking-wide mb-8">
            Sad to see you going!
          </h4>
          <p>But you have succesfully logged out</p>
        </div>
        <div className="redirect-home">
          <Link href="/" passHref>
            <button className="btn-primary">Go back home</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SignOut;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  if (!ses) return { redirect: { destination: '/', permanent: false } };
  return {
    props: {
      session: ses,
    },
  };
};
