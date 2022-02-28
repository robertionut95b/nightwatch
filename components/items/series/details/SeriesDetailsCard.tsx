import Image from 'next/image';
import DateComponent from '../../../utils/helpers/date';
import Link from 'next/link';
import SeriesCard from '../card/SeriesCard';
import { StringDropdown } from '../../../utils/layout/dropdowns/dropdown';
import { FormEvent, useCallback, useState } from 'react';
import EpisodeCard from '../../episodes/card/EpisodeCard';
import { Placeholder } from '../../../utils/layout/placeholders/placeholder';
import { useRouter } from 'next/dist/client/router';
import { createStandaloneToast } from '@chakra-ui/react';
import { toastDefaults } from '../../../../assets/constants/config';
import { useIsBookmarked } from '../card/useIsBookmarked';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import useAddSeason from './useAddSeason';
import {
  Actor,
  Director,
  Episode,
  Genre,
  Language,
  Role,
  Season,
  Serie,
  Comment,
} from '@prisma/client';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import CommentCard from '@components/items/comments/commentCard';
import Divider from '@components/utils/layout/divider/divider';
import { useSession } from 'next-auth/client';
import useCommentReply from '@components/items/comments/useCommentReply';
import { AppSession } from 'pages/api/auth/[...nextauth]';

export default function SeriesDetailsCard({
  series,
  relatedSeries,
}: {
  series: Serie & {
    genres: Genre[];
    actors: Actor[];
    directors: Director[];
    languages: Language[];
    seasons: (Season & {
      episodeIds: Episode[];
    })[];
    comments: (Comment & {
      user: {
        email: string;
        image: string | null;
        role: Role;
      };
      comments: (Comment & {
        user: {
          email: string;
          image: string | null;
          role: Role;
        };
      })[];
    })[];
  };
  relatedSeries: Serie[];
}): JSX.Element {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [selectedSeasonData, setSelectedSeasonData] = useState<
    typeof series['seasons'][0] | undefined
  >(series.seasons[0]);

  const router = useRouter();
  const toast = createStandaloneToast();
  const [session] = useSession();

  const { loading: loadingSeason, createSeason } = useAddSeason(
    series.imdbID,
    selectedSeason,
    {
      onSuccess: () => {
        toast({
          title: 'Added season',
          status: 'success',
          ...toastDefaults,
        });
        router.reload();
      },
      onError: () => {
        toast({
          title: 'Could not add season, try again later',
          status: 'error',
          ...toastDefaults,
        });
      },
    },
  );

  const createSeasonClick = useCallback(() => {
    if (selectedSeasonData?.episodeIds.length === 0 || !selectedSeasonData) {
      createSeason();
    } else {
      toast({
        title: 'Season already exists',
        status: 'warning',
        ...toastDefaults,
      });
    }
  }, [createSeason, selectedSeasonData, toast]);

  const {
    isBookmarked,
    addToWatchlist,
    loading: bookmarkLoading,
  } = useIsBookmarked(series.id, {
    onSuccess: () => {
      toast({
        title: isBookmarked ? 'Removed from watchlist' : 'Added to watchlist',
        status: isBookmarked ? 'info' : 'success',
        ...toastDefaults,
      });
    },
    onError: (err) => {
      if (err?.message.includes('Not authorised')) {
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

  const { loading: commentLoading, createComment } = useCommentReply({
    objectType: 'serie',
    onError: (err) => {
      if (err?.message.includes('Not authorised')) {
        toast({
          title: 'Action not allowed. Must login first',
          status: 'error',
          ...toastDefaults,
        });
      } else {
        toast({
          title: 'Failed to reply',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
    onSuccess: () => {
      toast({
        title: 'Comment added',
        status: 'success',
        ...toastDefaults,
      });
      router.reload();
    },
  });

  const submitComment = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const event = e as FormEvent<HTMLFormElement> & {
      target: { elements: { message: { value: string } } };
    };

    const message = event.target.elements.message.value;

    const appSession = session as AppSession;
    createComment(message, series.id, appSession);
  };

  const bookmarkButton = (): JSX.Element => {
    if (bookmarkLoading) {
      return (
        <button className="btn-primary mt-6 flex p-2 md:mt-12">
          <MinimalSpinner color="white" />
          <span className="hidden">.</span>
        </button>
      );
    }
    if (isBookmarked) {
      return (
        <button
          className="btn-primary mt-6 flex gap-x-1 md:mt-12"
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
      <button className="btn-primary mt-6 md:mt-12" onClick={addToWatchlist}>
        Add to watchlist
      </button>
    );
  };

  return (
    <div className="series-card-details text-black dark:text-white">
      <div className="relative grid grid-cols-1 place-items-start gap-x-2 md:grid-cols-3">
        <div className="content-info col-span-2 flex flex-col items-center gap-y-2 md:items-start">
          <h6 className="mb-2 text-3xl font-bold">{series.title}</h6>
          <h6 className="text-1xl mb-4 font-bold">TV Show - Series</h6>
          <div className="genres mb-2">
            {series?.genres && (
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 md:flex-row md:items-start">
                {series?.genres.map((g, idx) => (
                  <li
                    key={idx}
                    className="rounded-lg border border-solid px-1.5"
                  >
                    <Link href={`/series?g=${g?.name}`}>{g?.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:items-start">
            <li>
              📅 {<DateComponent dateString={series?.release?.toString()} />}
            </li>
            <li>
              🎥 {series.runtime} <small>minutes</small>
            </li>
            <li>
              ⭐ {series.imdbRating}/<small>10</small>
            </li>
            <li>🧾 {series.rating}</li>
          </ul>
          <p className="mt-4 text-center md:text-left">{series.plot}</p>
          {series?.languages?.length > 0 && (
            <ul className="languages mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 md:flex-row md:items-start">
              <span>Languages</span>
              {series?.languages.map((l, idx) => (
                <li key={idx} className="rounded-lg border border-solid px-1.5">
                  <Link href={`/series?l=${l?.name}`} passHref>
                    {l?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {bookmarkButton()}
        </div>
        <div className="image-poster relative order-first place-self-center md:order-last">
          <Image src={series.poster} width={300} height={400} alt="poster" />
        </div>
      </div>
      <div className="series-seasons mt-8 flex flex-col justify-center gap-y-4 md:justify-start">
        <div className="heading">
          <h6 className="mb-2 text-3xl font-bold">
            Seasons{' '}
            <small className="align-text-top text-lg">
              {series.totalSeasons}
            </small>
          </h6>
        </div>
        <div className="season-details flex items-center gap-x-2">
          <div className="select-season-btn">
            <StringDropdown
              label={'Season'}
              defaultValue={{
                value: selectedSeason.toString(),
                label: selectedSeason.toString(),
              }}
              items={[...Array(series.totalSeasons).keys()].map((i) => {
                return {
                  label: (i + 1).toString(),
                  value: (i + 1).toString(),
                };
              })}
              onChange={(item) => {
                setSelectedSeason(parseInt(item.value));
                setSelectedSeasonData(
                  series.seasons.find((s) => s.index === parseInt(item.value)),
                );
              }}
            />
          </div>
          <div className="add-season-btn">
            {(selectedSeasonData?.episodeIds.length === 0 ||
              !selectedSeasonData) &&
              (loadingSeason ? (
                <button className="btn-primary flex gap-x-2 p-2">
                  <MinimalSpinner color="white" />
                  <small>Loading ...</small>
                </button>
              ) : (
                selectedSeason >= 1 && (
                  <button
                    className="btn-primary"
                    onClick={createSeasonClick}
                    disabled={loadingSeason}
                  >
                    Add Season
                  </button>
                )
              ))}
          </div>
        </div>
        {selectedSeasonData && (
          <div className="series-season-link">
            <Link
              href={`/series/${series.imdbID}/seasons/${selectedSeasonData.index}/episodes`}
              passHref
            >
              <h5 className="cursor-pointer text-lg font-bold hover:underline">
                Season {selectedSeason} episodes{' '}
                <small className="align-text-top text-xs">
                  [{selectedSeasonData?.episodes}]
                </small>
              </h5>
            </Link>
          </div>
        )}
        <div className="series-episodes-slider mt-2 flex w-full gap-4 overflow-x-auto whitespace-nowrap p-2">
          {selectedSeasonData &&
            selectedSeasonData.episodeIds.map((ep, idx) => (
              <div className="inline-block" key={idx}>
                <EpisodeCard
                  episode={ep}
                  season={selectedSeasonData}
                  seriesImdbID={series.imdbID}
                />
              </div>
            ))}
          {(selectedSeasonData?.episodeIds.length === 0 ||
            !selectedSeasonData) && (
            <div className="inline-block">
              <Placeholder width={180} height={250} label="No poster" />
              <h6
                className="mt-2.5 truncate text-center font-medium tracking-wide"
                title={'Cannot find episode? Ask here'}
              >
                No title
              </h6>
            </div>
          )}
        </div>
        <div className="ask-episodes flex flex-col items-center gap-y-4">
          <p className="text-center">
            Missing information? <br />
            <small>(episodes, seasons)</small>
          </p>
          <Link href={`/ask?series=${series.imdbID}`} passHref>
            <button className="btn-primary">Ask here</button>
          </Link>
        </div>
      </div>
      {relatedSeries?.length > 0 && (
        <div className="similar-series mt-12 flex flex-col justify-center md:justify-start">
          <h6 className="mb-4 text-3xl font-bold">More like this</h6>
          <section className="related-series grid grid-cols-2 items-center gap-y-3 md:grid-cols-3 lg:grid-cols-6">
            {relatedSeries.map((s) => (
              <SeriesCard series={s} key={s.id} />
            ))}
          </section>
        </div>
      )}
      <div className="comments mt-16">
        <h6 className="mb-4 text-3xl font-bold">Comments</h6>
        <div className="comments-list flex flex-col gap-y-4">
          <ShowIfElse
            if={series?.comments?.length > 0}
            else={
              <h4 className="text-md font-normal">
                No comments yet. Be the first to comment!
              </h4>
            }
          >
            <>
              {series?.comments?.map((comment, idx) => (
                <CommentCard
                  key={idx}
                  {...comment}
                  objectType="serie"
                  showChildComments
                  entityId={series.id}
                />
              ))}
            </>
          </ShowIfElse>
        </div>
        <Divider />
        <div className="comments-form flex flex-col">
          <h4 className="mb-4 text-lg font-semibold">Save your comment</h4>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={(e) => submitComment(e)}
          >
            <label htmlFor="message">Message</label>
            <textarea
              className="w-full rounded-lg bg-gray-100 p-2 px-3 text-black dark:border-none dark:bg-none dark:text-gray-700"
              name="message"
              id="message-input"
              placeholder="Aa"
              required
              rows={3}
            />
            <button
              className="btn-primary-outline mt-4 place-self-end disabled:cursor-not-allowed dark:text-white dark:disabled:bg-primary-hover"
              type="submit"
              disabled={commentLoading || !session}
            >
              {commentLoading ? <MinimalSpinner color="white" /> : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
