import Link from 'next/link';
import Image from 'next/image';
import { Serie, SearchSeriesByTitleQuery } from '../../../../generated/graphql';
import { createStandaloneToast, Tooltip } from '@chakra-ui/react';
import { toastDefaults } from '../../../../assets/constants/config';
import React from 'react';
import { Ribbon } from '../../../utils/layout/card-fillers/ribbon';
import { useIsBookmarked } from './useIsBookmarked';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import useIsSeenSerie from './useIsSeen';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import { format, parseISO } from 'date-fns';
import { SeenMark } from '@components/utils/layout/card-fillers/seenMark';

export default function SeriesCard({
  series,
}: {
  series: Serie | SearchSeriesByTitleQuery['series'][0];
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
          title:
            'Unexpected error. If this persists, contact your administrator',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
  });

  const {
    isSeen,
    seenAt,
    loading: seenLoading,
    setIsSeen,
  } = useIsSeenSerie(id, {
    onSuccess: () => {
      toast({
        title: isSeen ? 'Removed seen mark' : 'Marked as seen',
        status: isSeen ? 'info' : 'success',
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
          title: 'Failed to update seen mark',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
  });

  return (
    <div className="series-card cursor-pointer transition hover:scale-110">
      <div className="relative mx-auto flex h-[280px] w-[180px] flex-col">
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
            if={!loading}
            else={
              <div className="absolute top-1 right-2 rounded-full bg-slate-900 p-2">
                <MinimalSpinner />
              </div>
            }
          >
            <Ribbon marked={isBookmarked} />
          </ShowIfElse>
        </div>
        <ShowIf if={isBookmarked}>
          <div
            className="seen-wrapper absolute top-1 left-0"
            onClick={() => !seenLoading && setIsSeen()}
          >
            <ShowIfElse
              if={!seenLoading}
              else={
                <div className="absolute top-1 left-2 rounded-full bg-slate-900 p-2">
                  <MinimalSpinner />
                </div>
              }
            >
              <Tooltip
                label={
                  seenAt &&
                  `Seen at ${format(parseISO(seenAt), 'LLLL d, yyyy hh:mm')}`
                }
              >
                <div>
                  <SeenMark marked={isSeen} />
                </div>
              </Tooltip>
            </ShowIfElse>
          </div>
        </ShowIf>
      </div>
    </div>
  );
}
