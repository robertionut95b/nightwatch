import Head from 'next/head';
import React from 'react';
import { useSession } from '../../node_modules/next-auth/client';
import SignInForm from '../auth/SignInForm';
import NavigationBar from '../nav/NavigationBar';
import { AskBanner } from './banners/askBanner';
import Footer from './footer/footer';
import styles from './layout.module.css';
import HeroMain from './home/heroMain';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import useMounted from './loading/loading';

export default function Layout({
  children,
  home = false,
}: {
  children: React.ReactNode;
  home?: boolean;
}): JSX.Element {
  const [session, loading] = useSession();
  const mounted = useMounted();
  const loadHero = () => {
    if (loading) return <MinimalSpinner />;
    if (session) return <HeroMain />;
    return <SignInForm />;
  };
  return (
    <div className="bg-white transition-colors duration-300 ease-out dark:bg-background">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={process.env.APP_SITE_NAME} />
        <title>{`${process.env.APP_SITE_NAME}`}</title>
      </Head>
      <header className={home ? styles.headingImage : styles.headerWrapper}>
        <NavigationBar />
        {home && (
          <div
            className={`hero-register-cta mx-auto max-w-max ${styles.heroRegister}`}
          >
            <div
              className={`hero-content flex flex-col items-center gap-y-4 rounded-lg bg-black bg-opacity-40 p-8 backdrop-blur-sm ${styles.heroContent}`}
            >
              <h4 className="text-shadow text-center text-3xl font-bold text-white shadow-lg">
                Best of movies and series
              </h4>
              <h6 className="text-shadow text-center">
                Build your watchlist and explore thousands of movies, series and
                documentaries
              </h6>
              {mounted && loadHero()}
            </div>
          </div>
        )}
      </header>
      <main
        className={`${styles.layoutMainContainer} container mx-auto w-full p-2 text-black dark:text-white`}
      >
        {children}
        <AskBanner />
      </main>
      <Footer />
    </div>
  );
}
