import { gql } from '@apollo/client';

export const CreateSerie = gql`
  mutation createSerie(
    $title: String!
    $genres: GenreCreateNestedManyWithoutSeriesInput
    $plot: String!
    $poster: String!
    $imdbRating: Float!
    $rating: String!
    $release: DateTime!
    $runtime: Int!
    $year: Int!
    $totalSeasons: Int!
    $languages: LanguageCreateNestedManyWithoutSeriesInput
    $imdbID: String!
  ) {
    createSerie(
      data: {
        title: $title
        genres: $genres
        plot: $plot
        poster: $poster
        imdbRating: $imdbRating
        rating: $rating
        release: $release
        runtime: $runtime
        year: $year
        totalSeasons: $totalSeasons
        languages: $languages
        imdbID: $imdbID
      }
    ) {
      id
      title
      genres {
        name
      }
      languages {
        name
      }
      imdbRating
      plot
      poster
      rating
      release
      runtime
      year
      imdbID
      totalSeasons
      seasons {
        id
        title
      }
    }
  }
`;

export const CreateSerieSearch = gql`
  mutation createSerieSearch(
    $title: String!
    $genres: GenreCreateNestedManyWithoutSeriesInput
    $plot: String!
    $poster: String!
    $imdbRating: Float!
    $rating: String!
    $release: DateTime!
    $runtime: Int!
    $year: Int!
    $totalSeasons: Int!
    $languages: LanguageCreateNestedManyWithoutSeriesInput
    $imdbID: String!
  ) {
    createSerie(
      data: {
        title: $title
        genres: $genres
        plot: $plot
        poster: $poster
        imdbRating: $imdbRating
        rating: $rating
        release: $release
        runtime: $runtime
        year: $year
        totalSeasons: $totalSeasons
        languages: $languages
        imdbID: $imdbID
      }
    ) {
      id
      title
      poster
    }
  }
`;

export const createMovieSearch = gql`
  mutation createMovieSearch(
    $title: String!
    $genres: GenreCreateNestedManyWithoutMoviesInput
    $plot: String!
    $poster: String!
    $imdbRating: Float!
    $rating: String!
    $release: DateTime!
    $runtime: Int!
    $year: Int!
    $languages: LanguageCreateNestedManyWithoutMoviesInput
    $imdbID: String!
  ) {
    createMovie(
      data: {
        title: $title
        genres: $genres
        plot: $plot
        poster: $poster
        imdbRating: $imdbRating
        rating: $rating
        release: $release
        runtime: $runtime
        year: $year
        languages: $languages
        imdbID: $imdbID
      }
    ) {
      id
      title
      poster
    }
  }
`;

export const createMovie = gql`
  mutation createMovie(
    $title: String!
    $genres: GenreCreateNestedManyWithoutMoviesInput
    $plot: String!
    $poster: String!
    $imdbRating: Float!
    $rating: String!
    $release: DateTime!
    $runtime: Int!
    $year: Int!
    $languages: LanguageCreateNestedManyWithoutMoviesInput
    $imdbID: String!
  ) {
    createMovie(
      data: {
        title: $title
        genres: $genres
        plot: $plot
        poster: $poster
        imdbRating: $imdbRating
        rating: $rating
        release: $release
        runtime: $runtime
        year: $year
        languages: $languages
        imdbID: $imdbID
      }
    ) {
      id
      title
      genres {
        name
      }
      languages {
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
      createdAt
      updatedAt
    }
  }
`;

export const createGenre = gql`
  mutation createGenre($name: String!) {
    createGenre(data: { name: $name }) {
      id
      name
    }
  }
`;

export const createSeason = gql`
  mutation createSeason(
    $title: String!
    $index: Int!
    $episodes: Int!
    $episodeIds: EpisodeCreateNestedManyWithoutSeasonInput!
    $series: SerieCreateNestedOneWithoutSeasonsInput!
    $launchDate: DateTime!
  ) {
    createSeason(
      data: {
        title: $title
        index: $index
        episodes: $episodes
        episodeIds: $episodeIds
        series: $series
        launchDate: $launchDate
      }
    ) {
      id
      title
      index
    }
  }
`;
