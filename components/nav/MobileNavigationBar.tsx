import SearchBar from './SearchBar';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import Profile from './Profile';

export default function MobileNavigationBar(): JSX.Element {
  const [session] = useSession();

  return (
    <div className="z-20 absolute flex flex-col h-screen overflow-auto top-[52px] left-0 pb-4 w-full bg-background">
      <ul className="flex flex-col p-4 gap-y-4">
        <SearchBar />
        {session && (
          <div className="profile rounded hover:bg-gray-900 transition-colors ease-out duration-300">
            <Link href="/user/profile" passHref>
              <a>
                <Profile />
              </a>
            </Link>
          </div>
        )}
        <div className="quick-actions grid grid-cols-2 gap-x-2">
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
