import Image from 'next/image';
import DateComponent from '../date';
import Link from 'next/link';
import {
  Serie,
  CreateSeasonMutation,
  useCreateSeasonMutation,
} from '../../generated/graphql';
import SeriesCard from './SeriesCard';
import { StringDropdown } from '../utils/dropdown';
import { useState } from 'react';
import EpisodeCard from './EpisodeCard';
import { Placeholder } from '../utils/placeholder';
import { ApolloError } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import { OMDBApiUtils } from '../../src/utils/convertors/OMDBApiUtils';

export default function SeriesDetailsCard({
  series,
  relatedSeries,
}: {
  series: Serie;
  relatedSeries: Serie[];
}): JSX.Element {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [selectedSeasonData, setSelectedSeasonData] = useState<
    Serie['seasons'][0] | undefined
  >(series.seasons[0]);

  const router = useRouter();
  const [createSeasonMutation] = useCreateSeasonMutation({
    fetchPolicy: 'no-cache',
    onError: (error: ApolloError) => {
      console.error(error);
      alert('Could not add season, try again later');
    },
    onCompleted: (data: CreateSeasonMutation) => {
      alert(`Season ${data.createSeason.index} created`);
      router.replace(router.asPath);
    },
  });

  const createSeriesSeason = async (): Promise<void> => {
    const requestedSeason =
      await OMDBApiUtils.fetchSeriesEpisodeBySeriesTitleAndSeason(
        series.imdbID,
        selectedSeason,
      );
    if (requestedSeason) {
      if (selectedSeasonData?.episodeIds.length === 0 || !selectedSeasonData) {
        await createSeasonMutation({
          variables: {
            ...requestedSeason.toCreateVariables(),
          },
        });
      } else {
        alert('Season already exists');
      }
    } else {
      alert('Could not retrieve season data, try again later');
    }
  };

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
          <button className="mt-6 md:mt-12 btn-primary">
            Add to watchlist
          </button>
        </div>
        <div className="image-poster relative place-self-center order-first md:order-last">
          <Image src={series.poster} width={300} height={400} alt="poster" />
        </div>
      </div>
      <div className="series-seasons flex flex-col justify-center md:justify-start mt-6 gap-y-4">
        <div className="heading">
          <h6 className="mb-2 font-bold text-3xl">
            Seasons{' '}
            <small className="text-lg align-text-top">
              {series.totalSeasons}
            </small>
          </h6>
        </div>
        <div className="season-dropdown w-min">
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
        {selectedSeasonData && (
          <div className="series-season-link">
            <Link href={`/series/${series.imdbID}/episodes`} passHref>
              <h5 className="mb-4 font-bold text-lg hover:underline cursor-pointer">
                Season {selectedSeason} episodes{' '}
                <small className="text-xs align-text-top">
                  [{selectedSeasonData?.episodes}]
                </small>
              </h5>
            </Link>
          </div>
        )}
        <div className="series-episodes-slider w-full overflow-x-auto whitespace-nowrap flex gap-4">
          {selectedSeasonData &&
            selectedSeasonData.episodeIds.map((ep, idx) => (
              <div className="inline-block" key={idx}>
                <EpisodeCard episode={ep} seriesImdbID={series.imdbID} />
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
        {(selectedSeasonData?.episodeIds.length === 0 ||
          !selectedSeasonData) && (
          <button className="btn-primary" onClick={createSeriesSeason}>
            Add Season
          </button>
        )}
        <div className="ask-episodes mt-4 flex flex-col items-center gap-y-4">
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
