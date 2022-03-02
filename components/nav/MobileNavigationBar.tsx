import SearchBar from './SearchBar';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import Profile from './Profile';

export default function MobileNavigationBar(): JSX.Element {
  const [session] = useSession();

  return (
    <div className="absolute top-[52px] left-0 z-20 flex h-screen w-full flex-col overflow-auto bg-white pb-4 dark:bg-background">
      <ul className="flex flex-col gap-y-4 p-4">
        <SearchBar />
        {session && (
          <div className="profile rounded transition-colors duration-300 ease-out hover:bg-gray-200 dark:hover:bg-gray-900">
            <Link href="/user/profile" passHref>
              <a className="hover:decoration-black dark:hover:decoration-white">
                <Profile />
              </a>
            </Link>
          </div>
        )}
        <div className="quick-actions grid gap-2">
          {session && (
            <Link href="/user/watchlists" passHref>
              <button className="btn-primary">Watchlists</button>
            </Link>
          )}
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
        </div>
      </ul>
    </div>
  );
}
