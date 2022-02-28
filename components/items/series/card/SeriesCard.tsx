import Link from 'next/link';
import Image from 'next/image';
import {
  Serie,
  SearchSeriesByTitleQuery,
  AllSeriesQuery,
} from '../../../../generated/graphql';
import { createStandaloneToast } from '@chakra-ui/react';
import { toastDefaults } from '../../../../assets/constants/config';
import React from 'react';
import { Ribbon } from '../../../utils/layout/card-fillers/ribbon';
import { useIsBookmarked } from './useIsBookmarked';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';

export default function SeriesCard({
  series,
  bookmarked = false,
}: {
  series:
    | Serie
    | AllSeriesQuery['series'][0]
    | SearchSeriesByTitleQuery['series'][0];
  bookmarked?: boolean;
}): JSX.Element {
  const { id } = series;
  const toast = createStandaloneToast();
  const { isBookmarked, addToWatchlist, loading } = useIsBookmarked(id, {
    onSuccess: () => {
      toast({
        title: isBookmarked ? 'Removed from watchlist' : 'Added to watchlist',
        status: isBookmarked ? 'info' : 'success',
        ...toastDefaults,
      });
    },
    onError: (err) => {
      if (err?.message.includes('Not Authorised')) {
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

  return (
    <div className="series-card cursor-pointer transition hover:scale-110">
      <div className="relative mx-auto flex w-[180px] flex-col">
        <Link href={`/series/${series.imdbID}`}>
          <a>
            <Image
              src={series.poster}
              width={180}
              height={250}
              alt="poster"
              objectFit="cover"
            />
          </a>
        </Link>
        <h6
          className="mt-1 truncate text-center font-medium tracking-wide text-black dark:text-white"
          title={series.title}
        >
          {series.title}
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
                  <div className="absolute top-1 right-2 rounded-full bg-slate-900 p-2">
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
  );
}
