import Image from 'next/image';
import DateComponent from '../../../utils/helpers/date';
import Link from 'next/link';
import { CreateSeasonMutation, Serie } from '../../../../generated/graphql';
import SeriesCard from '../card/SeriesCard';
import { StringDropdown } from '../../../utils/layout/dropdowns/dropdown';
import { useCallback, useEffect, useState } from 'react';
import EpisodeCard from '../../episodes/card/EpisodeCard';
import { Placeholder } from '../../../utils/layout/placeholders/placeholder';
import { useRouter } from 'next/dist/client/router';
import { createStandaloneToast } from '@chakra-ui/toast';
import { toastDefaults } from '../../../../assets/constants/config';
import { useIsBookmarked } from '../card/useIsBookmarked';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import useAddSeason from './useAddSeason';

export default function SeriesDetailsCard({
  series,
  relatedSeries,
}: {
  series: Serie;
  relatedSeries: Serie[];
}): JSX.Element {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [selectedSeasonData, setSelectedSeasonData] = useState<
    Serie['seasons'][0] | CreateSeasonMutation['createSeason'] | undefined
  >(series.seasons[0]);

  const router = useRouter();
  const toast = createStandaloneToast();

  const {
    loading: loadingSeason,
    createSeason,
    data,
  } = useAddSeason(series.imdbID, selectedSeason, {
    onSuccess: () => {
      toast({
        title: 'Added season',
        status: 'success',
        ...toastDefaults,
      });
      router.replace(router.asPath);
    },
    onError: () => {
      toast({
        title: 'Could not add season, try again later',
        status: 'error',
        ...toastDefaults,
      });
    },
  });

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

  const { isBookmarked, addToWatchlist, loading } = useIsBookmarked(series.id, {
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

  useEffect(() => {
    if (data) {
      setSelectedSeasonData(data.createSeason);
    }
  }, [data]);

  return (
    <div className="series-card-details">
      <div className="grid grid-cols-1 md:grid-cols-3 relative place-items-start gap-x-2">
        <div className="content-info flex flex-col items-center md:items-start gap-y-2 col-span-2">
          <h6 className="mb-2 font-bold text-3xl">{series.title}</h6>
          <h6 className="mb-4 font-bold text-1xl">TV Show - Series</h6>
          <div className="genres mb-2">
            {series?.genres && (
              <ul className="flex items-center md:items-start md:flex-row gap-x-2 gap-y-2 flex-wrap">
                {series?.genres.map((g, idx) => (
                  <li
                    key={idx}
                    className="border border-solid rounded-lg px-1.5"
                  >
                    <Link href={`/series?g=${g?.name}`}>{g?.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="flex flex-row items-center md:items-start gap-x-4 gap-y-2 flex-wrap">
            <li>📅 {<DateComponent dateString={series.release} />}</li>
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
            <ul className="languages mt-4 flex items-center md:items-start md:flex-row gap-x-2 gap-y-2 flex-wrap">
              <span>Languages</span>
              {series?.languages.map((l, idx) => (
                <li key={idx} className="border border-solid rounded-lg px-1.5">
                  <Link href={`/series?l=${l?.name}`} passHref>
                    {l?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {bookmarkButton()}
        </div>
        <div className="image-poster relative place-self-center order-first md:order-last">
          <Image src={series.poster} width={300} height={400} alt="poster" />
        </div>
      </div>
      <div className="series-seasons mt-8 flex flex-col justify-center md:justify-start gap-y-4">
        <div className="heading">
          <h6 className="mb-2 font-bold text-3xl">
            Seasons{' '}
            <small className="text-lg align-text-top">
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
              <h5 className="font-bold text-lg hover:underline cursor-pointer">
                Season {selectedSeason} episodes{' '}
                <small className="text-xs align-text-top">
                  [{selectedSeasonData?.episodes}]
                </small>
              </h5>
            </Link>
          </div>
        )}
        <div className="series-episodes-slider mt-2 w-full overflow-x-auto whitespace-nowrap flex gap-4">
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
                className="text-center mt-2.5 truncate font-medium tracking-wide"
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
        <div className="similar-series flex flex-col justify-center md:justify-start mt-12">
          <h6 className="mb-4 font-bold text-3xl">More like this</h6>
          <section className="related-series grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-y-3">
            {relatedSeries.map((s) => (
              <SeriesCard series={s} key={s.id} />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
