import Image from 'next/image';
import Link from 'next/link';
import { Placeholder } from '../../../utils/layout/placeholders/placeholder';
import { Ribbon } from '../../../utils/layout/card-fillers/ribbon';
import { useIsBookmarked } from './useIsBookmarked';
import { toastDefaults } from '../../../../assets/constants/config';
import { createStandaloneToast } from '@chakra-ui/react';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import { Episode, Season as PrismaSeason, Season } from '@prisma/client';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { CreateSeasonMutation } from 'generated/graphql';

export default function EpisodeCard({
  seriesImdbID,
  season,
  episode,
  bookmarked = false,
}: {
  seriesImdbID: string;
  season:
    | Season
    | CreateSeasonMutation['createSeason']
    | PrismaSeason
    | { index: Season['index'] };
  episode: Episode | CreateSeasonMutation['createSeason']['episodeIds'][0];
  bookmarked?: boolean;
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
  return (
    <div className="episode-card w-max">
      <div className="series-card cursor-pointer">
        <div className="flex flex-col mx-auto relative w-[180px]">
          <Link
            href={`/series/${seriesImdbID}/seasons/${season.index}/episodes/${episode.imdbID}`}
            passHref
          >
            <a>
              <ShowIfElse
                else={
                  <Placeholder width={180} height={250} label="No poster" />
                }
                if={episode.poster}
              >
                <Image
                  src={episode.poster}
                  width={180}
                  height={250}
                  alt="poster"
                  objectFit="cover"
                />
              </ShowIfElse>
            </a>
          </Link>
          <h6
            className="text-center mt-1 truncate font-medium tracking-wide text-black dark:text-white"
            title={episode.title}
          >
            {episode.title}
          </h6>
          <div
            className="ribbon-wrapper"
            onClick={() => !loading && addToWatchlist()}
          >
            <ShowIfElse
              if={bookmarked}
              else={
                <>
                  {loading ? (
                    <div className="absolute top-1 right-2 p-2 bg-slate-900 rounded-full">
                      <MinimalSpinner />
                    </div>
                  ) : (
                    <Ribbon marked={isBookmarked} />
                  )}
                </>
              }
            >
              <Ribbon marked={bookmarked} />
            </ShowIfElse>
          </div>
        </div>
      </div>
    </div>
  );
}
