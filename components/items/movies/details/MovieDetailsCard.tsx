import Image from 'next/image';
import DateComponent from '../../../utils/helpers/date';
import MovieCard from '../card/MovieCard';
import Link from 'next/link';
import { Movie } from '../../../../generated/graphql';
import { useIsBookmarked } from '../card/useIsBookmarked';
import { toastDefaults } from '../../../../assets/constants/config';
import { createStandaloneToast } from '@chakra-ui/toast';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';

export default function MovieDetailsCard({
  movie,
  relatedMovies,
}: {
  movie: Movie;
  relatedMovies: Movie[];
}): JSX.Element {
  const toast = createStandaloneToast();
  const { isBookmarked, addToWatchlist, loading } = useIsBookmarked(movie.id, {
    onSuccess: () => {
      toast({
        title: isBookmarked ? 'Removed from watchlist' : 'Added to watchlist',
        status: isBookmarked ? 'info' : 'success',
        ...toastDefaults,
      });
    },
    onError: (err) => {
      if (err?.message.includes('Access denied')) {
        toast({
          title: 'Action not allowed. Must login first',
          status: 'error',
          ...toastDefaults,
        });
      } else {
        toast({
          title: 'Failed to remove from watchlist',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
  });
  const bookmarkButton = (): JSX.Element => {
    if (loading) {
      return (
        <button className="mt-6 md:mt-12 btn-primary flex p-2">
          <MinimalSpinner color="white" />
          <span className="hidden">.</span>
        </button>
      );
    }
    if (isBookmarked) {
      return (
        <button
          className="mt-6 md:mt-12 btn-primary flex gap-x-1"
          onClick={addToWatchlist}
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
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          In watchlist
        </button>
      );
    }
    return (
      <button className="mt-6 md:mt-12 btn-primary" onClick={addToWatchlist}>
        Add to watchlist
      </button>
    );
  };
  return (
    <div className="movie-card-details">
      <div className="grid grid-cols-1 md:grid-cols-3 relative place-items-start gap-x-2">
        <div className="content-info flex flex-col items-center md:items-start gap-y-2 col-span-2">
          <h6 className="mb-4 font-bold text-3xl">{movie.title}</h6>
          <div className="genres mb-2">
            {movie?.genres && (
              <ul className="flex items-center md:items-start md:flex-row gap-x-2 gap-y-2 flex-wrap">
                {movie?.genres.map((g, idx) => (
                  <li
                    key={idx}
                    className="border border-solid rounded-lg px-1.5"
                  >
                    <Link href={`/movies?g=${g?.name}`}>{g?.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="flex flex-row items-center md:items-start gap-x-4 gap-y-2 flex-wrap">
            <li>📅 {<DateComponent dateString={movie.release} />}</li>
            <li>
              🎥 {movie.runtime} <small>minutes</small>
            </li>
            <li>
              ⭐ {movie.imdbRating}/<small>10</small>
            </li>
            <li>🧾 {movie.rating}</li>
          </ul>
          <p className="mt-4 text-center md:text-left">{movie.plot}</p>
          {movie?.languages?.length > 0 && (
            <ul className="languages mt-4 flex items-center md:items-start md:flex-row gap-x-2 gap-y-2 flex-wrap">
              <span>Languages</span>
              {movie?.languages.map((l, idx) => (
                <li key={idx} className="border border-solid rounded-lg px-1.5">
                  {l?.name}
                </li>
              ))}
            </ul>
          )}
          {bookmarkButton()}
        </div>
        <div className="image-poster relative place-self-center order-first md:order-last">
          <Image src={movie.poster} width={290} height={400} alt="poster" />
        </div>
      </div>
      {relatedMovies?.length > 0 && (
        <div className="similar-movies flex flex-col justify-center md:justify-start mt-12">
          <h6 className="mb-4 font-bold text-3xl">More like this</h6>
          <div className="related-movies">
            <section className="related-movies grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-y-3">
              <>
                {relatedMovies?.map((m) => (
                  <MovieCard movie={m} key={m.id} />
                ))}
              </>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
