import Link from 'next/link';
import { useSession } from '../../node_modules/next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { FormEvent } from 'react';

export default function NavigationBar() {

  const [session] = useSession();
  const router = useRouter();
  const { query, pathname } = useRouter();

  const isHome = pathname === '/';

  const hitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (document.getElementById('search-input-title') as HTMLInputElement).value;
    if (search) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
        <nav className={`flex flex-row z-10 justify-between px-12 items-center sticky top-0 py-3 backdrop-blur-sm ${isHome ? 'bg-black' : 'bg-background-dark'} bg-opacity-60`}>
            <div className="nav-logo">
                <Link href="/" passHref>
                  <h1 className='font-bold text-lg cursor-pointer'>{process.env.APP_SITE_NAME}</h1>
                </Link>
            </div>
            <div className="nav-search-screenings relative hidden md:block w-1/3">
                <form action="/search" encType="application/x-www-form-urlencoded" onSubmit={(e) => hitSearch(e)}>
                    <input
                        id='search-input-title'
                        name="q"
                        className={'bg-background w-full shadow-md bg-clip-padding bg-opacity-60 px-4 py-1 backdrop-filter backdrop-blur-sm rounded-md text-sm font-semibold border border-gray-800'}
                        type="text"
                        placeholder="Search movies ..."
                        required
                        defaultValue={query?.q || ''}></input>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1.5 right-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </form>
            </div>
            <div className="nav-right-menu">
                <div className="flex flex-row gap-x-4 items-center">
                    {session && <Link href="/user/watchlists">Watchlists</Link>}
                    {!session && <Link href="/auth/signin" passHref><button className='btn-primary'>Log in</button></Link>}
                    {session && <Link href="/auth/signout" passHref><button className='btn-primary'>Log out</button></Link>}
                </div>
            </div>
        </nav >
  );
}