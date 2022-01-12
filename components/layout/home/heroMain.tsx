import Link from 'next/link';

export const HeroMain = (): JSX.Element => {

  return (
    <div>
      <h5>Start looking through following sections</h5>
      <ul className="mt-6 flex flex-col md:flex-row gap-x-6 gap-y-4 md:gap-y-0 justify-center items-center md:justify-around md:items-start">
        <li className="font-bold hover:underline">
          <Link href='/movies' passHref>
            <div className="cursor-pointer flex gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <span>Movies</span>
            </div>
          </Link>
        </li>
        <li className="font-bold hover:underline">
          <Link href='/series' passHref>
            <div className="cursor-pointer flex gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>TV Shows</span>
            </div>
          </Link>
        </li>
        <li className="font-bold hover:underline">
          <Link href='/movies?g=Documentary' passHref>
            <div className="cursor-pointer flex gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>Doc</span>
            </div>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default HeroMain;