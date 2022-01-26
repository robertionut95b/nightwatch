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
      totalSeasons
      imdbID
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
      episodeIds {
        id
        imdbID
        plot
        poster
        runtime
        seasonId
        title
        createdAt
        updatedAt
        imdbRating
      }
      episodes
      launchDate
      seriesId
      createdAt
      updatedAt
    }
  }
`;

export const addSeriesToWatchlist = gql`
  mutation addSeriesToWatchlist(
    $serie: SerieCreateNestedOneWithoutWatchlistInput!
    $watchlist: SeriesWatchlistCreateNestedOneWithoutSeriesInput!
  ) {
    createWatchlistedSerie(data: { serie: $serie, watchlist: $watchlist }) {
      serieId
      seen
    }
  }
`;

export const removeSeriesFromWatchlist = gql`
  mutation removeSeriesFromWatchlist(
    $where: WatchlistedSerieWhereUniqueInput!
  ) {
    deleteWatchlistedSerie(where: $where) {
      serieId
      watchlistId
    }
  }
`;

export const addMovieToWatchlist = gql`
  mutation addMovieToWatchlist(
    $movie: MovieCreateNestedOneWithoutWatchlistInput!
    $watchlist: MoviesWatchlistCreateNestedOneWithoutMoviesInput!
  ) {
    createWatchlistedMovie(data: { movie: $movie, watchlist: $watchlist }) {
      movieId
      seen
    }
  }
`;

export const removeMovieFromWatchlist = gql`
  mutation removeMovieFromWatchlist($where: WatchlistedMovieWhereUniqueInput!) {
    deleteWatchlistedMovie(where: $where) {
      movieId
      watchlistId
    }
  }
`;

export const addEpisodeToWatchlist = gql`
  mutation addEpisodeToWatchlist(
    $episode: EpisodeCreateNestedOneWithoutWatchlistInput!
    $watchlist: EpisodesWatchlistCreateNestedOneWithoutEpisodesInput!
  ) {
    createWatchlistedEpisode(
      data: { episode: $episode, watchlist: $watchlist }
    ) {
      episodeId
      seen
    }
  }
`;

export const removeEpisodeFromWatchlist = gql`
  mutation removeEpisodeFromWatchlist(
    $where: WatchlistedEpisodeWhereUniqueInput!
  ) {
    deleteWatchlistedEpisode(where: $where) {
      episodeId
      watchlistId
    }
  }
`;

export const createManyAppSettings = gql`
  mutation createManyAppSettings(
    $data: [AppSettingsCreateManyInput!]!
    $skipDuplicates: Boolean
  ) {
    createManyAppSettings(data: $data, skipDuplicates: $skipDuplicates) {
      count
    }
  }
`;

export const updateManyAppSettings = gql`
  mutation updateManyAppSettings(
    $data: AppSettingsUpdateManyMutationInput!
    $where: AppSettingsWhereInput!
  ) {
    updateManyAppSettings(data: $data, where: $where) {
      count
    }
  }
`;

export const upsertAppSettings = gql`
  mutation upsertAppSettings(
    $create: AppSettingsCreateInput!
    $update: AppSettingsUpdateInput!
    $where: AppSettingsWhereUniqueInput!
  ) {
    upsertAppSettings(create: $create, update: $update, where: $where) {
      name
      value
    }
  }
`;
