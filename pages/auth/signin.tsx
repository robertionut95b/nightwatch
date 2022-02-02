import { getSession } from 'next-auth/client';
import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/layout';
import SignInForm from '../../components/auth/SignInForm';
import Logo from '@components/nav/Logo';
import Head from 'next/head';

const SignIn = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Login - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="sign-in-to-logo flex justify-center items-center mb-16">
        <Logo /> <span className="ml-3">|</span>{' '}
        <span className="ml-3 text-xl"> Sign In</span>
      </div>
      <section className="flex justify-evenly items-center">
        <div className="intro mb-8">
          <h4 className="font-bold text-xl tracking-wide mb-1">
            Log in or Register
          </h4>
          <p className="dark:text-gray-200">
            This application uses an email authentication system
          </p>
          <p>You do not need to remember any passwords</p>
        </div>
        <SignInForm />
      </section>
    </Layout>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  if (ses) return { redirect: { destination: '/', permanent: false } };
  return {
    props: {
      session: ses,
    },
  };
};
