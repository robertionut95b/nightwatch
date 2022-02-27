import { WatchlistsPageProps } from '../../../pages/user/watchlists';
import MovieCard from '../movies/card/MovieCard';
import SeriesCard from '../series/card/SeriesCard';
import EpisodeCard from '../episodes/card/EpisodeCard';
import { useState } from 'react';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';

export const WatchlistComponent = ({
  watchlist,
}: WatchlistsPageProps): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState<string>('movies');

  return (
    <section>
      <div className="flex flex-col gap-y-6 text-black dark:text-white">
        <h2 className="text-xl font-bold tracking-wide">
          {watchlist.name || 'Watchlist'}
        </h2>
        <div className="selector">
          <select
            className="text-black dark:text-gray-500 bg-gray-200 dark:bg-backgroundSecondary font-medium rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring appearance-none"
            placeholder="Select a section"
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="movies">Movies</option>
            <option value="series">Series</option>
            <option value="episodes">Episodes</option>
          </select>
        </div>
        <ShowIf if={selectedSection === 'movies'}>
          <div className="movies">
            <ShowIfElse
              if={
                watchlist?.movieWatchlist &&
                watchlist?.movieWatchlist?.movies?.length > 0
              }
              else={'No movies in this watchlist'}
            >
              <h2 className="text-lg font-bold">Movies</h2>
              <div className="movies-wrapper mt-3 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
                {watchlist.movieWatchlist?.movies?.map(({ movie }) => (
                  <MovieCard key={movie.id} movie={movie} bookmarked />
                ))}
              </div>
            </ShowIfElse>
          </div>
        </ShowIf>
        <ShowIf if={selectedSection === 'series'}>
          <div className="series">
            <ShowIfElse
              if={
                watchlist?.seriesWatchlist &&
                watchlist?.seriesWatchlist?.series.length > 0
              }
              else={'No series in this watchlist'}
            >
              <h2 className="text-lg font-bold">Series</h2>
              <div className="series-wrapper mt-3 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
                {watchlist.seriesWatchlist?.series?.map(({ serie }) => (
                  <SeriesCard key={serie.id} series={serie} bookmarked />
                ))}
              </div>
            </ShowIfElse>
          </div>
        </ShowIf>
        <ShowIf if={selectedSection === 'episodes'}>
          <div className="episodes">
            <h2 className="text-lg font-bold">Episodes</h2>
            <div className="series-wrapper mt-2 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-12">
              {watchlist.episodeWatchlist?.episodes?.map(({ episode }) => (
                <div
                  className="flex flex-col items-center"
                  key={episode.imdbID}
                >
                  <span className="font-normal text-md truncate">
                    {episode.season.series.title} - S{episode.season.index}
                  </span>
                  <EpisodeCard
                    key={episode.id}
                    seriesImdbID={episode.season.series.imdbID}
                    episode={episode}
                    season={episode.season}
                    bookmarked
                  />
                </div>
              ))}
            </div>
          </div>
        </ShowIf>
      </div>
    </section>
  );
};

export default WatchlistComponent;
