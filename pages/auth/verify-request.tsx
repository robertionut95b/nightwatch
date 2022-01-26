import Head from 'next/head';
import Layout from '../../components/layout/layout';

const VerifyRequest = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Verify request - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="notice flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <h4 className="font-bold text-xl mb-10">Thank you for registering!</h4>
        <h6 className="font-normal text-lg tracking-wide">
          An email has been sent to you, please click the link and authenticate
          before continuing
        </h6>
      </div>
    </Layout>
  );
};
export default VerifyRequest;
