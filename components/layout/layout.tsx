import Head from 'next/head';
import React from 'react';
import { useSession } from '../../node_modules/next-auth/client';
import SignInForm from '../auth/SignInForm';
import NavigationBar from '../nav/NavigationBar';
import { AskBanner } from './askBanner';
import Footer from './footer';
import styles from './layout.module.css';
import HeroMain from './heroMain';

export default function Layout({
  children,
  home = false,
}: {
  children: React.ReactNode;
  home?: boolean;
}): JSX.Element {
  const [session] = useSession();
  return (
    <div className={`scroll-smooth`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={process.env.APP_SITE_NAME} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={home ? styles.headingImage : styles.headerWrapper}>
        <NavigationBar />
        {home && (
          <div
            className={`hero-register-cta max-w-max mx-auto ${styles.heroRegister}`}
          >
            <div
              className={`hero-content p-8 backdrop-blur-sm flex flex-col items-center gap-y-4 bg-black bg-opacity-40 rounded-lg ${styles.heroContent}`}
            >
              <h4 className="text-white text-center font-bold text-3xl shadow-lg text-shadow">
                Best of movies and series
              </h4>
              <h6 className="text-center text-shadow">
                Build your watchlist and explore thousands of movies, series and
                documentaries
              </h6>
              {!session && <SignInForm />}
              {session && <HeroMain />}
            </div>
          </div>
        )}
      </header>
      <main
        className={`${styles.layoutMainContainer} w-full container mx-auto p-2`}
      >
        {children}
        <AskBanner />
      </main>
      <Footer />
    </div>
  );
}
