import Link from 'next/link';
import { useSession } from '../../node_modules/next-auth/client';
import { useRouter } from 'next/dist/client/router';

export default function NavigationBar() {

    const [session] = useSession()
    const { query, pathname } = useRouter()

    const name = 'Night Watch 🌙'
    const isHome = pathname === "/"

    return (
        <nav className={`flex flex-row justify-between px-12 items-center sticky top-0 py-3 backdrop-blur-sm ${isHome ? 'bg-black' : 'bg-background-dark'} bg-opacity-60`}>
            <div className="nav-logo">
                <Link href="/">
                    <h1 className='font-bold text-lg cursor-pointer'>{name}</h1>
                </Link>
            </div>
            <div className="nav-search-screenings relative hidden md:block">
                <form action="/search" encType="application/x-www-form-urlencoded">
                    <input
                        name="q"
                        className={`bg-black shadow-md bg-clip-padding bg-opacity-60 px-4 py-1 backdrop-filter backdrop-blur-sm rounded-md text-sm`}
                        type="text"
                        placeholder="Search movies ..."
                        required
                        defaultValue={query?.q || ""}></input>
                    <img className="absolute top-2 right-2" src="/images/search-icon.png" width={20} height={24} alt="search" />
                </form>
            </div>
            <div className="nav-right-menu">
                <div className="flex flex-row gap-x-4 items-center">
                    {session && <Link href="/user/watchlists">Watchlists</Link>}
                    {!session && <Link href="/auth/signin"><button className='btn-primary'>Log in</button></Link>}
                    {session && <Link href="/auth/signout"><button className='btn-primary'>Log out</button></Link>}
                </div>
            </div>
        </nav >
    )
}