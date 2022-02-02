import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/layout/layout';

const VerifyRequest = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{`Verify - ${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <div className="notice flex flex-col items-center relative gap-y-4">
        <Image
          src={'/images/email-check.png'}
          alt="email check"
          width={300}
          height={260}
          layout="intrinsic"
          objectFit="contain"
        />
        <h4 className="font-bold text-xl">An email is on it&apos;s way!</h4>
        <h6 className="font-normal text-lg tracking-wide mb-4">
          An email has been sent to you, please click the link and authenticate
          before continuing
        </h6>
        <h4 className="font-bold text-xl mb-10">Go check your email!</h4>
      </div>
    </Layout>
  );
};
export default VerifyRequest;
