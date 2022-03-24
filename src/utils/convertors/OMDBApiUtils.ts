import { OMDBSeries, IOMDBSeries } from './OMDBSeries';
import { omdbAPI } from '../omdbapi/api';
import {
  IOMDBSearchSeries,
  IOMDBSeriesSearch,
  OMDBSearchSeries,
} from './OMDBSearchSeries';
import {
  OMDBSearchMovie,
  IOMDBMovieSearch,
  IOMDBSearchMovie,
} from './OMDBSearchMovies';
import { OMDBMovie, IOMDBMovie } from './OMDBMovie';
import { IOMDBSeason, OMDBSeason, OMDBEpisode } from './OMDBSeason';
import { parseISO } from 'date-fns';

export class OMDBApiUtils {
  public static async fetchOMDBSeriesBySearchTitle(
    title: string,
  ): Promise<OMDBSearchSeries[]> {
    const titleEncoded = encodeURIComponent(title);
    let seriesResp: IOMDBSearchSeries[] = [];
    const series: OMDBSearchSeries[] = [];
    try {
      seriesResp = (
        await omdbAPI.get<IOMDBSeriesSearch>(
          `?s=${titleEncoded}&apiKey=${process.env.OMDB_API_KEY}&type=series`,
        )
      ).data.Search;
      seriesResp.forEach((s) => {
        series.push(
          new OMDBSearchSeries(s.Title, s.Year, s.imdbID, s.Type, s.Poster),
        );
      });
    } catch (err) {
      console.error(err);
    }
    return series;
  }

  public static async fetchOMDBSeriesByID(
    id: string,
  ): Promise<OMDBSeries | undefined> {
    let seriesResp: IOMDBSeries | undefined = undefined;
    let series: OMDBSeries | undefined = undefined;
    try {
      seriesResp = (
        await omdbAPI.get<IOMDBSeries>(
          `?i=${id}&apiKey=${process.env.OMDB_API_KEY}&plot=full&type=series`,
        )
      ).data;
      series = new OMDBSeries(
        seriesResp.Title,
        seriesResp.Year,
        seriesResp.Rated,
        seriesResp.Released,
        seriesResp.Runtime,
        seriesResp.Genre,
        seriesResp.Director,
        seriesResp.Actors,
        seriesResp.Plot,
        seriesResp.Language,
        seriesResp.Poster,
        seriesResp.imdbRating,
        seriesResp.totalSeasons,
        seriesResp.imdbID,
      );
    } catch (err) {
      console.error(err);
    }
    return series;
  }

  public static async fetchOMDBMoviesBySearchTitle(
    title: string,
  ): Promise<OMDBSearchMovie[]> {
    const titleEncoded = encodeURIComponent(title);
    let moviesResp: IOMDBSearchMovie[] = [];
    const movies: OMDBSearchMovie[] = [];
    try {
      moviesResp = (
        await omdbAPI.get<IOMDBMovieSearch>(
          `?s=${titleEncoded}&apiKey=${process.env.OMDB_API_KEY}&type=movie`,
        )
      ).data.Search;
      moviesResp.forEach((m) => {
        movies.push(
          new OMDBSearchMovie(m.Title, m.Year, m.imdbID, m.Type, m.Poster),
        );
      });
    } catch (err) {
      console.error(err);
    }
    return movies;
  }

  public static async fetchOMDBMovieByID(
    id: string,
  ): Promise<OMDBMovie | undefined> {
    let movieResp: IOMDBMovie | undefined = undefined;
    let movie: OMDBMovie | undefined = undefined;
    try {
      movieResp = (
        await omdbAPI.get<IOMDBMovie>(
          `?i=${id}&apiKey=${process.env.OMDB_API_KEY}&plot=full&type=movie`,
        )
      ).data;
      movie = new OMDBMovie(
        movieResp.Title,
        movieResp.Year,
        movieResp.Rated,
        movieResp.Released,
        movieResp.Runtime,
        movieResp.Genre,
        movieResp.Director,
        movieResp.Actors,
        movieResp.Plot,
        movieResp.Language,
        movieResp.Poster,
        movieResp.imdbRating,
        movieResp.imdbID,
      );
    } catch (err) {
      console.error(err);
    }
    return movie;
  }

  public static async fetchSeriesEpisodeBySeriesTitleAndSeason(
    seriesId: string,
    season: number,
  ): Promise<OMDBSeason | undefined> {
    let seasonResp: IOMDBSeason | undefined = undefined;
    let seasonObj: OMDBSeason | undefined = undefined;
    try {
      seasonResp = (
        await omdbAPI.get<IOMDBSeason>(
          `?i=${seriesId}&season=${season}&apiKey=${process.env.OMDB_API_KEY}`,
        )
      ).data;
      seasonObj = new OMDBSeason(
        seasonResp.Title,
        parseInt(seasonResp.Season),
        seasonResp.Episodes?.length || 0,
        seasonResp.Episodes.map(
          (ep) =>
            new OMDBEpisode(
              ep.Title,
              parseISO(ep.Released),
              ep.Episode.toString(),
              parseFloat(ep.imdbRating) || 0,
              ep.imdbID,
            ),
        ),
        seriesId,
        parseISO(seasonResp.Episodes?.[0]?.Released),
      );
    } catch (err) {
      console.error(err);
    }
    return seasonObj;
  }
}
