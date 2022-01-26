import Link from 'next/link';
import { useSession } from '../../node_modules/next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import MobileNavigationBar from './MobileNavigationBar';
import SearchBar from './SearchBar';
import Logo from './Logo';
import Profile from './Profile';
import useWindowDimensions from '../utils/hooks/useWindowDimensions';
import { MinimalSpinner } from '../utils/layout/spinners/minimalSpinner';

export default function NavigationBar(): JSX.Element {
  const [session, loading] = useSession();
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  const [isFullMenuToggled, setIsFullMenuToggled] =
    React.useState<boolean>(false);

  const { width } = useWindowDimensions();

  React.useEffect(() => {
    if (width <= 768) {
      return;
    }
    if (width > 768) {
      setIsFullMenuToggled(false);
      document.body.style.overflow = 'unset';
    }
  }, [width]);

  React.useEffect(() => {
    if (isFullMenuToggled) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isFullMenuToggled]);

  return (
    <nav
      className={`flex flex-row z-10 justify-between px-5 md:px-12 items-center sticky top-0 py-3 backdrop-blur-sm ${
        isHome ? 'bg-black' : 'bg-background-dark'
      } bg-opacity-60`}
    >
      <Logo />
      <div className="searchbar relative hidden md:block w-1/3">
        <SearchBar />
      </div>
      <div className="nav-right-menu">
        <div className="flex-row gap-x-4 items-center hidden md:flex">
          {loading ? (
            <MinimalSpinner />
          ) : (
            <>
              <Link href="/user/profile" passHref>
                <a>
                  <Profile minimal />
                </a>
              </Link>
              {!session && (
                <Link href="/auth/signin" passHref>
                  <button className="btn-primary">Log in</button>
                </Link>
              )}
              {session && (
                <Link href="/auth/signout" passHref>
                  <button className="btn-primary">Log out</button>
                </Link>
              )}
            </>
          )}
        </div>
        <div
          className="hamburger-button cursor-pointer block md:hidden"
          onClick={() => setIsFullMenuToggled(!isFullMenuToggled)}
        >
          {!isFullMenuToggled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
      {isFullMenuToggled && <MobileNavigationBar />}
    </nav>
  );
}
