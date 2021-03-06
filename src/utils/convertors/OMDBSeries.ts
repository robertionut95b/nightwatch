import { IPrismaSeriesConvertor } from './IConvertors';
import { Prisma } from '@prisma/client';
import { parse } from 'date-fns';
import { CreateSerieMutationVariables } from '../../../generated/graphql';

export interface IOMDBSeries {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Poster: string;
  imdbRating: string;
  totalSeasons: string;
  imdbID: string;
}

export class OMDBSeries implements IPrismaSeriesConvertor {
  title: string;

  year: string;

  rated: string;

  released: string;

  runtime: string;

  genre: string;

  director: string;

  actors: string;

  plot: string;

  language: string;

  poster: string;

  imdbRating: string;

  totalSeasons: string;

  imdbID: string;

  constructor(
    title: string,
    year: string,
    rated: string,
    released: string,
    runtime: string,
    genre: string,
    director: string,
    actors: string,
    plot: string,
    language: string,
    poster: string,
    imdbRating: string,
    totalSeasons: string,
    imdbID: string,
  ) {
    this.title = title;
    this.year = year;
    this.rated = rated;
    this.released = released;
    this.runtime = runtime;
    this.genre = genre;
    this.director = director;
    this.actors = actors;
    this.plot = plot;
    this.language = language;
    this.poster = poster;
    this.imdbRating = imdbRating;
    this.totalSeasons = totalSeasons;
    this.imdbID = imdbID;
  }

  mapGenresFromString(): {
    where: {
      name: string;
    };
    create: {
      name: string;
    };
  }[] {
    return this.genre?.split(',').map((g) => {
      return {
        where: {
          name: g.trim(),
        },
        create: {
          name: g.trim(),
        },
      };
    });
  }

  mapLanguagesFromString(): {
    where: {
      name: string;
    };
    create: {
      name: string;
    };
  }[] {
    return this.language?.split(',').map((l) => {
      return {
        where: {
          name: l.trim(),
        },
        create: {
          name: l.trim(),
        },
      };
    });
  }

  public toPrismaSeriesCreate(): Prisma.SerieCreateInput {
    const genres = this.mapGenresFromString();
    const languages = this.mapLanguagesFromString();
    const series: Prisma.SerieCreateInput = {
      title: this.title,
      year: parseInt(this.year?.split('-')[0]),
      rating: this.rated || 'N/A',
      release:
        parse(this.released, 'dd MMM yyyy', new Date()) || new Date(5999, 1, 1),
      runtime: parseInt(this.runtime) || 0,
      genres: {
        connectOrCreate: genres,
      },
      directors: undefined,
      actors: undefined,
      plot: this.plot,
      languages: {
        connectOrCreate: languages,
      },
      poster: this.poster,
      imdbRating: parseFloat(this.imdbRating) || 0,
      imdbID: this.imdbID,
      totalSeasons: parseInt(this.totalSeasons) || 0,
    };
    return series;
  }

  public toCreateVariables = (): CreateSerieMutationVariables => {
    const genres = this.mapGenresFromString();
    const languages = this.mapLanguagesFromString();
    return {
      title: this.title,
      year: parseInt(this.year?.split('-')[0]),
      rating: this.rated || 'N/A',
      release:
        parse(this.released, 'dd MMM yyyy', new Date()) || new Date(5999, 1, 1),
      runtime: parseInt(this.runtime) || 0,
      genres: {
        connectOrCreate: genres,
      },
      plot: this.plot,
      languages: {
        connectOrCreate: languages,
      },
      poster: this.poster,
      imdbRating: parseFloat(this.imdbRating) || 0,
      imdbID: this.imdbID,
      totalSeasons: parseInt(this.totalSeasons) || 0,
    };
  };

  static jsonToObject(json: OMDBSeries): OMDBSeries {
    return new OMDBSeries(
      json.title,
      json.year,
      json.rated,
      json.released,
      json.runtime,
      json.genre,
      json.director,
      json.actors,
      json.plot,
      json.language,
      json.poster,
      json.imdbRating,
      json.totalSeasons,
      json.imdbID,
    );
  }
}
