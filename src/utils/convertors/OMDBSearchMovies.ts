export interface IOMDBSearchMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IOMDBMovieSearch {
  Search: IOMDBSearchMovie[];
}

export class OMDBSearchMovie {
  Title: string;

  Year: string;

  imdbID: string;

  Type: string;

  Poster: string;

  constructor(
    title: string,
    year: string,
    imdbID: string,
    type: string,
    poster: string,
  ) {
    this.Title = title;
    this.Year = year;
    this.imdbID = imdbID;
    this.Type = type;
    this.Poster = poster;
  }

  static jsonToObject = (json: IOMDBSearchMovie): OMDBSearchMovie =>
    new OMDBSearchMovie(
      json.Title,
      json.Year,
      json.imdbID,
      json.Type,
      json.Poster,
    );
}
