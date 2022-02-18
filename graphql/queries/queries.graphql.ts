import { gql } from '@apollo/client';

export const AllMovies = gql`
  query allMovies(
    $cursor: MovieWhereUniqueInput
    $where: MovieWhereInput
    $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]
    $skip: Int
    $take: Int
  ) {
    movies(
      cursor: $cursor
      where: $where
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
      id
      title
      poster
      imdbID
      genres {
        name
      }
    }
  }
`;

export const AllMoviesLangGenre = gql`
  query AllMoviesLangGenre(
    $cursor: MovieWhereUniqueInput
    $where: MovieWhereInput
    $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]
    $skip: Int
    $take: Int
  ) {
    movies(
      cursor: $cursor
      where: $where
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
      id
      title
      poster
      imdbID
      genres {
        name
      }
    }
    genres {
      id
      name
    }
    languages {
      id
      name
    }
  }
`;

export const AllMoviesDetails = gql`
  query AllMoviesDetails {
    movies {
      id
      title
      year
      rating
      release
      runtime
      genres {
        name
      }
      plot
      poster
      imdbRating
      imdbID
      createdAt
      updatedAt
    }
  }
`;

export const MovieById = gql`
  query movie($id: Int!) {
    movie(where: { id: $id }) {
      id
      title
      year
      rating
      release
      runtime
      genres {
        name
      }
      plot
      poster
      imdbRating
      imdbID
      createdAt
      updatedAt
    }
  }
`;

export const searchMovieByTitle = gql`
  query searchMovieByTitle($title: String!) {
    movies(where: { title: { contains: $title, mode: insensitive } }) {
      id
      title
      poster
      imdbID
    }
  }
`;

export const AllGenres = gql`
  query genres {
    genres {
      id
      name
    }
  }
`;

export const AllGenresLanguages = gql`
  query genresLanguages {
    genres {
      id
      name
    }
    languages {
      id
      name
    }
  }
`;

export const AllSeasons = gql`
  query allSeasons {
    seasons {
      id
      title
    }
  }
`;

export const AllSeries = gql`
  query allSeries(
    $cursor: SerieWhereUniqueInput
    $where: SerieWhereInput
    $orderBy: [SerieOrderByWithRelationAndSearchRelevanceInput!]
    $skip: Int
    $take: Int
  ) {
    series(
      cursor: $cursor
      where: $where
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
      id
      title
      poster
      imdbID
      genres {
        name
      }
    }
  }
`;

export const AllSeriesLangGenre = gql`
  query allSeriesLangGenre(
    $cursor: SerieWhereUniqueInput
    $where: SerieWhereInput
    $orderBy: [SerieOrderByWithRelationAndSearchRelevanceInput!]
    $skip: Int
    $take: Int
  ) {
    series(
      cursor: $cursor
      where: $where
      orderBy: $orderBy
      skip: $skip
      take: $take
    ) {
      id
      title
      poster
      imdbID
      genres {
        name
      }
    }
    genres {
      id
      name
    }
    languages {
      id
      name
    }
  }
`;

export const AllSeriesDetails = gql`
  query AllSeriesDetails {
    series {
      id
      title
      genres {
        name
      }
      imdbRating
      imdbID
      plot
      poster
      rating
      release
      runtime
      year
      totalSeasons
      seasons {
        id
        title
      }
    }
  }
`;

export const SeriesById = gql`
  query serieById($id: Int!) {
    serie(where: { id: $id }) {
      id
      title
      year
      rating
      release
      runtime
      genres {
        name
      }
      plot
      poster
      imdbRating
      createdAt
      updatedAt
      totalSeasons
      seasons {
        id
        title
      }
    }
  }
`;

export const searchSeriesByTitle = gql`
  query searchSeriesByTitle($title: String!) {
    series(where: { title: { search: $title } }) {
      id
      title
      poster
      imdbID
    }
  }
`;

export const relatedSeries = gql`
  query series($id: Int!, $genre: [String!]) {
    series(
      where: {
        id: { not: { equals: $id } }
        genres: { every: { name: { in: $genre, mode: insensitive } } }
      }
      take: 6
    ) {
      id
      title
      poster
    }
  }
`;

export const relatedMovies = gql`
  query movies($id: Int!, $genre: [String!]) {
    movies(
      where: {
        id: { not: { equals: $id } }
        genres: { every: { name: { in: $genre, mode: insensitive } } }
      }
      take: 6
    ) {
      id
      title
      poster
    }
  }
`;

export const getWatchlist = gql`
  query watchlists($where: WatchlistWhereInput) {
    watchlists(where: $where) {
      id
      default
      name
      movieWatchlist {
        movies {
          movieId
          addedAt
          seen
          seenAt
        }
      }
      episodeWatchlist {
        episodes {
          episodeId
          addedAt
          seen
          seenAt
        }
      }
      seriesWatchlist {
        series {
          serieId
          addedAt
          seen
          seenAt
        }
      }
    }
  }
`;
