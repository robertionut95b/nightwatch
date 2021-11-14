import Head from 'next/head'
import { useSession } from '../../node_modules/next-auth/client';
import SignInForm from '../auth/SignInForm';
import NavigationBar from '../nav/NavigationBar';
import Footer from './footer';
import styles from './layout.module.css';

export const siteTitle = 'NightWatch 🌙'

export default function Layout({ children, home = false }) {

  const [session] = useSession()

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={home ? styles.headingImage : styles.headerWrapper}>
        <NavigationBar />
        {
          home &&
          (
            <div className={`hero-register-cta max-w-max mx-auto ${styles.heroRegister}`}>
              <div className={`hero-content p-4 backdrop-blur-sm flex flex-col items-center gap-y-4 bg-black bg-opacity-40 ${styles.heroContent}`}>
                <h4 className='text-white text-center font-bold text-3xl shadow-lg text-shadow'>
                  Best of movies and series
                </h4>
                <h6 className='text-center text-shadow'>
                  Build your watchlist and explore thousands of movies, series and documentaries
                </h6>
                {!session && <SignInForm />}
                {
                  session
                  &&
                  <div>
                    <h5>Latest additions</h5>
                  </div>
                }
              </div>
            </div>
          )
        }
      </header>
      <main className={`${styles.layoutMainContainer} w-full container mx-auto p-2`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}