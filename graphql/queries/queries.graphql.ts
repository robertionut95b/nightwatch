import { gql } from '@apollo/client';

export const AllMovies = gql`
query allMovies($genre: String) {
        movies(where: {genres: {some: {name: {contains: $genre} }}}) {
            id,
            title,
            poster,
            genres {
                name
            }
        }
    }
`
export const AllMoviesDetails = gql`
   query AllMoviesDetails {
        movies {
            id,
            title,
            year,
            rating,
            release,
            runtime,
            genres {
                name
            },
            plot,
            poster,
            imdbRating,
            createdAt,
            updatedAt,
      }
   }
`

export const MovieById = gql`
    query movie ($id: Int!) {
        movie (where: {id: $id}) {
        id,
        title,
        year,
        rating,
        release,
        runtime,
        genres {
          name
        },
        plot,
        poster,
        imdbRating,
        createdAt,
        updatedAt,
      }
   }
`

export const searchMovieByTitle = gql`
    query searchMovieByTitle($title: String!) {
      movies (where: {title: {contains: $title}}) {
            id,
            title,
            year,
            rating,
            release,
            runtime,
            plot,
            poster,
            imdbRating,
            createdAt,
            updatedAt
      }
    }
`

export const AllGenres = gql`
  query genres {
      genres {
      id,
      name,
      }
    }
`

export const AllSeasons = gql`
  query allSeasons {
    seasons {
        id,
        title
    }
  }
`

export const AllSeries = gql`
query allSeries($genre: String) {
        series(where: {genres: {some: {name: {contains: $genre} }}}) {
            id,
            title,
            poster,
            genres {
                name
            }
        }
    }
`

export const AllSeriesDetails = gql`
  query AllSeriesDetails {
    series {
        id,
        title,
        genres {
            name
        },
        imdbRating,
        plot,
        poster,
        rating,
        release,
        runtime,
        year,
        totalSeasons,
        seasons {
            id,
            title
        }
    }
  }
`

export const SeriesById = gql`
    query serieById ($id: Int!) {
        serie (where: {id: $id}) {
          id,
          title,
          year,
          rating,
          release,
          runtime,
          genres {
            name
          },
          plot,
          poster,
          imdbRating,
          createdAt,
          updatedAt,
          totalSeasons,
          seasons {
            id,
            title
          }
        }
   }
`

export const searchSeriesByTitle = gql`
    query searchSeriesByTitle($title: String!) {
      series (where: {title: {contains: $title}}) {
            id,
            title,
            poster,
            createdAt,
            updatedAt
      }
    }
`

export const relatedSeries = gql`
    query series ($id: Int!, $genre: [String!]) {
        series (where: { id: { not: {equals: $id} }, genres: {some: {name: {in: $genre, mode: insensitive}}}}) {
          id,
          title,
          poster,
    }
  }
`

export const relatedMovies = gql`
    query movies ($id: Int!, $genre: [String!]) {
        movies (where: {id: {not: {equals: $id} }, genres: {some: {name: {in: $genre , mode: insensitive}}}}) {
          id,
          title,
          poster,
    }
  }
`