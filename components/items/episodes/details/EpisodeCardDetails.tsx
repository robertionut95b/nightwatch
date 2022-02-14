import Image from 'next/image';
import { toastDefaults } from '../../../../assets/constants/config';
import { createStandaloneToast } from '@chakra-ui/react';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import { Episode } from '@prisma/client';
import { useIsBookmarked } from '../card/useIsBookmarked';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { Placeholder } from '@components/utils/layout/placeholders/placeholder';

export default function EpisodeDetailsCard({
  episode,
}: {
  episode: Episode;
}): JSX.Element {
  const toast = createStandaloneToast();
  const { isBookmarked, addToWatchlist, loading } = useIsBookmarked(
    episode.id,
    {
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
    },
  );
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
    <div className="movie-card-details text-black dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 relative place-items-start gap-x-2">
        <div className="content-info flex flex-col items-center md:items-start gap-y-2 col-span-2">
          <h6 className="mb-4 font-bold text-3xl">{episode.title}</h6>
          <ul className="flex flex-row items-center md:items-start gap-x-4 gap-y-2 flex-wrap">
            {/* <li>📅 {<DateComponent dateString={episode.release} />}</li> */}
            <li>
              🎥 {episode.runtime} <small>minutes</small>
            </li>
            <li>
              ⭐ {episode.imdbRating}/<small>10</small>
            </li>
          </ul>
          <ShowIfElse
            if={episode.plot}
            else={
              <p className="mt-4 text-center md:text-left">
                This episode has no description yet. Be the first to update it!
              </p>
            }
          >
            <p className="mt-4 text-center md:text-left">{episode.plot}</p>
          </ShowIfElse>
          {bookmarkButton()}
        </div>
        <div className="image-poster relative place-self-center order-first md:order-last">
          <ShowIfElse
            if={episode.poster}
            else={<Placeholder width={290} height={400} />}
          >
            <Image src={episode.poster} width={290} height={400} alt="poster" />
          </ShowIfElse>
        </div>
      </div>
    </div>
  );
}
