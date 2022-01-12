import Link from 'next/link';
import Layout from '../components/layout/layout';
import Image from 'next/image';
import Head from 'next/head';

export default function Error404(): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="404-wrapper flex flex-col md:flex-row justify-around items-center gap-8 mt-24">
        <div className="left-404">
          <div className="sad-svg self-center relative">
            <Image
              src="/images/404.gif"
              alt="sad"
              width={420}
              height={420}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="right-404 flex flex-col gap-y-8">
          <h4 className="text-xl md:text-3xl font-bold text-center">
            Oops... this page was not found!
          </h4>
          <div className="redirect-home text-center">
            <Link href="/" passHref>
              <button className="btn-primary">Go back home</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
