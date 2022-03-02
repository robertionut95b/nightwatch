import { WatchlistsPageProps } from '../../../pages/user/watchlists';
import MovieCard from '../movies/card/MovieCard';
import SeriesCard from '../series/card/SeriesCard';
import EpisodeCard from '../episodes/card/EpisodeCard';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import WatchlistTypeSelector from './WatchlistTypeSelector';
import { WatchlistsDocument } from 'generated/graphql';
import { useApolloClient } from '@apollo/client';
import { useEffect } from 'react';

export const WatchlistComponent = ({
  watchlist,
}: WatchlistsPageProps): JSX.Element => {
  const { selectedSection, WatchlistSelector } = WatchlistTypeSelector();
  const client = useApolloClient();

  useEffect(() => {
    client.writeQuery({
      query: WatchlistsDocument,
      data: {
        watchlists: {
          ...watchlist,
        },
        __typename: 'Watchlist',
      },
    });
  }, [client, watchlist]);

  return (
    <section>
      <div className="flex flex-col gap-y-6 text-black dark:text-white">
        <h2 className="text-xl font-bold tracking-wide">
          {watchlist.name || 'Watchlist'}
        </h2>
        <WatchlistSelector />
        <ShowIf if={selectedSection === 'movies'}>
          <div className="movies">
            <ShowIfElse
              if={
                watchlist?.movieWatchlist &&
                watchlist?.movieWatchlist?.movies?.length > 0
              }
              else={
                'No movies in this watchlist. Add a movie to your watchlist to see it here'
              }
            >
              <h2 className="text-lg font-bold">Movies</h2>
              <div className="movies-wrapper layout-grid mt-3">
                {watchlist.movieWatchlist?.movies?.map(({ movie }) => (
                  <MovieCard key={movie.id} movie={movie} />
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
              else={
                'No series in this watchlist. Add a serie to your watchlist to see it here'
              }
            >
              <h2 className="text-lg font-bold">Series</h2>
              <div className="series-wrapper layout-grid mt-3">
                {watchlist.seriesWatchlist?.series?.map(({ serie }) => (
                  <SeriesCard key={serie.id} series={serie} />
                ))}
              </div>
            </ShowIfElse>
          </div>
        </ShowIf>
        <ShowIf if={selectedSection === 'episodes'}>
          <div className="episodes">
            <ShowIfElse
              if={
                watchlist?.episodeWatchlist &&
                watchlist?.episodeWatchlist?.episodes.length > 0
              }
              else={
                'No episodes in this watchlist. Add an episode to your watchlist to see it here.'
              }
            >
              <h2 className="text-lg font-bold">Episodes</h2>
              <div className="series-wrapper layout-grid mt-2">
                {watchlist.episodeWatchlist?.episodes?.map(({ episode }) => (
                  <div
                    className="flex flex-col items-center"
                    key={episode.imdbID}
                  >
                    <span className="text-md truncate font-normal">
                      {episode.season.series.title} - S{episode.season.index}
                    </span>
                    <EpisodeCard
                      key={episode.id}
                      seriesImdbID={episode.season.series.imdbID}
                      episode={episode}
                      season={episode.season}
                    />
                  </div>
                ))}
              </div>
            </ShowIfElse>
          </div>
        </ShowIf>
      </div>
    </section>
  );
};

export default WatchlistComponent;
