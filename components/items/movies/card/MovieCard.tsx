import Link from 'next/link';
import Image from 'next/image';
import { Movie, SearchMovieByTitleQuery } from '../../../../generated/graphql';
import { Ribbon } from '../../../utils/layout/card-fillers/ribbon';
import { toastDefaults } from '../../../../assets/constants/config';
import { useIsBookmarked } from './useIsBookmarked';
import { createStandaloneToast, Tooltip } from '@chakra-ui/react';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import useIsSeenMovie from './useIsSeen';
import { SeenMark } from '@components/utils/layout/card-fillers/seenMark';
import { format, parseISO } from 'date-fns';

export default function MovieCard({
  movie,
}: {
  movie: Movie | SearchMovieByTitleQuery['movies'][0];
}): JSX.Element {
  const { id } = movie;
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
  } = useIsSeenMovie(id, {
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
    <div className="movie-card cursor-pointer transition hover:scale-110">
      <div className="relative mx-auto flex h-[280px] w-[180px] flex-col">
        <Link href={`/movies/${movie.imdbID}`}>
          <a>
            <Image
              src={movie.poster}
              width={180}
              height={250}
              alt="poster"
              objectFit="cover"
            />
          </a>
        </Link>
        <h6
          className="mt-1 truncate text-center font-medium tracking-wide text-black dark:text-white"
          title={movie.title}
        >
          {movie.title}
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
