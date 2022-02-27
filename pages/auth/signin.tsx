import {
  ClientSafeProvider,
  getProviders,
  getSession,
  signIn,
} from 'next-auth/client';
import { GetServerSideProps } from 'next';
import Layout from '../../components/layout/layout';
import SignInForm from '../../components/auth/SignInForm';
import Logo from '@components/nav/Logo';
import Head from 'next/head';
import Divider from '../../components/utils/layout/divider/divider';
import ShowIf from '@components/utils/layout/showConditional/showIf';

const SignIn = ({
  providers,
}: {
  providers: Record<string, ClientSafeProvider>;
}): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Login - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="sign-in-to-logo mb-16 flex items-center justify-center">
        <Logo /> <span className="ml-3">|</span>{' '}
        <span className="ml-3 text-xl"> Sign In</span>
      </div>
      <section className="flex flex-col items-center justify-evenly lg:flex-row">
        <div className="intro mb-8">
          <h4 className="mb-1 text-xl font-bold tracking-wide">
            Log in or Register
          </h4>
          <p className="dark:text-gray-200">
            This application uses an email authentication system
          </p>
          <p>You do not need to remember any passwords</p>
        </div>
        <SignInForm />
      </section>
      <Divider content="OR" />
      <section className="flex flex-col items-center justify-center gap-y-4">
        {Object.values(providers)
          .filter((provider) => provider.type === 'oauth')
          .map((provider) => (
            <div key={provider.name}>
              <button
                className="btn-primary-outline flex items-center justify-center gap-x-2 dark:text-white"
                onClick={() => signIn(provider.id)}
              >
                <ShowIf if={provider.name.toLowerCase() === 'google'}>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <path
                        id="a"
                        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <path
                      clipPath="url(#b)"
                      fill="#FBBC05"
                      d="M0 37V11l17 13z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#EA4335"
                      d="M0 11l17 13 7-6.1L48 14V0H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#34A853"
                      d="M0 37l30-23 7.9 1L48 0v48H0z"
                    />
                    <path
                      clipPath="url(#b)"
                      fill="#4285F4"
                      d="M48 48L17 24l-4-3 35-10z"
                    />
                  </svg>
                </ShowIf>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </section>
    </Layout>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ses = await getSession(context);
  const providers = await getProviders();
  if (ses) return { redirect: { destination: '/', permanent: false } };
  return {
    props: {
      session: ses,
      providers,
    },
  };
};
