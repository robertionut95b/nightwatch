import Head from 'next/head';
import Layout from '../components/layout/layout';
import Link from 'next/link';

const Error500 = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Unknown server error - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <section className="flex flex-col gap-y-6 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <h4 className="font-bold text-xl tracking-wide">
          Unfortunately an error has ocurred
        </h4>
        <h6 className="text-lg tracking-wide">
          We are sorry, something went wrong on our end. Please try again later
          or directly contact us
        </h6>
        <div className="what-to-do flex gap-x-2">
          <Link href={`/`} passHref>
            <span className="btn btn-primary cursor-pointer">Go back home</span>
          </Link>
          <Link href={`/contact`} passHref>
            <span className="btn btn-primary cursor-pointer">Contact us</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Error500;
