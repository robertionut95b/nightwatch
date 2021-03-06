import { Prisma } from '@prisma/client';
import { parse } from 'date-fns';
import { CreateMovieMutationVariables } from '../../../generated/graphql';
import { IPrismaMovieConvertor } from './IConvertors';

export interface IOMDBMovie {
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
  imdbID: string;
}

export class OMDBMovie implements IPrismaMovieConvertor {
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

  imdbID: string;

  constructor(
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Actors: string,
    Plot: string,
    Language: string,
    Poster: string,
    imdbRating: string,
    imdbID: string,
  ) {
    this.Title = Title;
    this.Year = Year;
    this.Rated = Rated;
    this.Released = Released;
    this.Runtime = Runtime;
    this.Genre = Genre;
    this.Director = Director;
    this.Actors = Actors;
    this.Plot = Plot;
    this.Language = Language;
    this.Poster = Poster;
    this.imdbRating = imdbRating;
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
    return this.Genre?.split(',').map((g) => {
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
    return this.Language?.split(',').map((l) => {
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

  static jsonToObject = (
    json: IOMDBMovie | undefined,
  ): OMDBMovie | undefined => {
    if (!json) return undefined;
    return new OMDBMovie(
      json.Title,
      json.Year,
      json.Rated,
      json.Released,
      json.Runtime,
      json.Genre,
      json.Director,
      json.Actors,
      json.Plot,
      json.Language,
      json.Poster,
      json.imdbRating,
      json.imdbID,
    );
  };

  toCreateVariables = (): CreateMovieMutationVariables => {
    const genres = this.mapGenresFromString();
    const languages = this.mapLanguagesFromString();
    return {
      title: this.Title,
      year: parseInt(this.Year?.split('-')[0]),
      rating: this.Rated || 'N/A',
      release:
        parse(this.Released, 'dd MMM yyyy', new Date()) || new Date(5999, 1, 1),
      runtime: parseInt(this.Runtime?.split(' ')[0]) || 0,
      genres: {
        connectOrCreate: genres,
      },
      languages: {
        connectOrCreate: languages,
      },
      plot: this.Plot,
      poster: this.Poster,
      imdbRating: parseFloat(this.imdbRating) || 0,
      imdbID: this.imdbID,
    };
  };

  toPrismaMovieCreate = (): Prisma.MovieCreateInput => {
    const genres = this.mapGenresFromString();
    const languages = this.mapLanguagesFromString();
    return {
      title: this.Title,
      year: parseInt(this.Year),
      rating: this.Rated || 'N/A',
      release:
        parse(this.Released, 'dd MMM yyyy', new Date()) || new Date(5999, 1, 1),
      runtime: parseInt(this.Runtime) || 0,
      genres: {
        connectOrCreate: genres,
      },
      directors: undefined,
      actors: undefined,
      plot: this.Plot,
      languages: {
        connectOrCreate: languages,
      },
      poster: this.Poster,
      imdbRating: parseInt(this.imdbRating) || 0,
      imdbID: this.imdbID,
    };
  };
}
