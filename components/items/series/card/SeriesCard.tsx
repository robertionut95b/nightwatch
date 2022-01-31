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

export default function SeriesCard({
  series,
}: {
  series:
    | Serie
    | AllSeriesQuery['series'][0]
    | SearchSeriesByTitleQuery['series'][0];
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

  return (
    <div className="series-card cursor-pointer transition hover:scale-110">
      <div className="flex flex-col mx-auto relative w-[180px]">
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
          className="text-center mt-1 truncate font-medium tracking-wide text-black dark:text-white"
          title={series.title}
        >
          {series.title}
        </h6>
        <div
          className="ribbon-wrapper"
          onClick={() => !loading && addToWatchlist()}
        >
          {loading ? (
            <div className="absolute top-1 right-2 p-2 bg-slate-900 rounded-full">
              <MinimalSpinner />
            </div>
          ) : (
            <Ribbon marked={isBookmarked} />
          )}
        </div>
      </div>
    </div>
  );
}
