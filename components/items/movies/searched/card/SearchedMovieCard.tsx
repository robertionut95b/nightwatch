import Image from 'next/image';
import { Placeholder } from '../../../../utils/layout/placeholders/placeholder';
import { useState } from 'react';
import { OMDBSearchMovie } from '../../../../../src/utils/convertors/OMDBSearchMovies';

// eslint-disable-next-line no-unused-vars
export default function SearchedMoviesCard({
  movie,
  createMovieCb,
  disabled,
}: {
  disabled?: boolean;
  movie: OMDBSearchMovie;
  createMovieCb: (id: string) => Promise<void>;
}): JSX.Element {
  const [isHovered, setHover] = useState<boolean>(false);

  return (
    <div
      className="series-card cursor-pointer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col mx-auto relative w-[180px]">
        {movie.Poster != 'N/A' ? (
          <Image
            src={movie.Poster}
            width={180}
            height={250}
            alt="poster"
            objectFit="cover"
          />
        ) : (
          <Placeholder width={180} height={250} />
        )}
        <div
          className={`absolute left-2/4 top-2/4 transition-all ease-in duration-150 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <button
            className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-full text-base shadow-sm"
            onClick={() => createMovieCb(movie.imdbID)}
            disabled={disabled}
          >
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
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <h6
          className="text-center mt-1 truncate font-medium tracking-wide text-black dark:text-white"
          title={movie.Title}
        >
          {movie.Title}
        </h6>
      </div>
    </div>
  );
}
