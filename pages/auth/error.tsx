import Layout from '../../components/layout/layout';
import Head from 'next/head';

const AuthError = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Authentication error - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="notice flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <h4 className="font-bold text-xl mb-10">Unexpected error</h4>
        <h6 className="font-normal text-lg tracking-wide">
          Unfortunately your request could not be completed. Please try again
        </h6>
      </div>
    </Layout>
  );
};

export default AuthError;
