import { Prisma } from '@prisma/client';
import { CreateSeasonMutationVariables } from '../../../generated/graphql';
import { IPrismaSeasonsConvertor } from './IConvertors';

export interface IOMDBEpisode {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
}

export interface IOMDBSeason {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: IOMDBEpisode[];
}

export class OMDBEpisode {
  Title: string;

  Released: Date;

  Episode: string;

  imdbRating: number;

  imdbID: string;

  constructor(
    Title: string,
    Released: Date,
    Episode: string,
    imdbRating: number,
    imdbID: string,
  ) {
    this.Title = Title;
    this.Released = Released;
    this.Episode = Episode;
    this.imdbRating = imdbRating;
    this.imdbID = imdbID;
  }
}

export class OMDBSeason implements IPrismaSeasonsConvertor {
  title: string;

  index: number;

  episodes: number;

  seriesId: string;

  launchDate: Date;

  episodeIds: OMDBEpisode[];

  constructor(
    title: string,
    index: number,
    episodes: number,
    episodeIds: OMDBEpisode[],
    seriesId: string,
    launchDate: Date,
  ) {
    this.title = title;
    this.index = index;
    this.episodes = episodes;
    this.seriesId = seriesId;
    this.launchDate = launchDate;
    this.episodeIds = episodeIds;
  }

  toCreateVariables = (): CreateSeasonMutationVariables => {
    const episodes = this.episodeIds.map((episode) => {
      return {
        where: {
          imdbID: episode.imdbID,
        },
        create: {
          title: episode.Title,
          imdbRating: episode.imdbRating,
          plot: '',
          poster: '',
          runtime: 0,
          imdbID: episode.imdbID,
        },
      };
    });
    return {
      title: this.title,
      index: this.index,
      episodes: this.episodes,
      episodeIds: {
        connectOrCreate: episodes,
      },
      series: {
        connect: {
          imdbID: this.seriesId,
        },
      },
      launchDate: this.launchDate,
    };
  };

  toPrismaSeasonCreate = (): Prisma.SeasonCreateInput => {
    return this.toCreateVariables() as Prisma.SeasonCreateInput;
  };
}
