import { gql } from '@apollo/client';

export const AllMovies = gql`
query allMovies($genre: [String]) {
        movies(genre: $genre) {
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
            related {
                id,
                title,
                poster,
            }
      }
   }
`

export const MovieById = gql`
    query movie ($id: Int!) {
        movie (id: $id) {
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
        related {
          id,
          title,
          poster,
        }
      }
   }
`

export const searchMovieByTitle = gql`
    query searchMovieByTitle($title: String!) {
      searchMovieByTitle (title: $title) {
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
query allSeries($genre: [String]) {
        series(genre: $genre) {
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
        related {
            id,
            title
        },
        seasons {
            id,
            title
        }
    }
  }
`

export const SeriesById = gql`
    query series ($id: Int!) {
        serie (id: $id) {
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
          related {
            id,
            title,
            poster,
          }
        }
   }
`

export const searchSeriesByTitle = gql`
    query searchSeriesByTitle($title: String!) {
      searchSeriesByTitle (title: $title) {
            id,
            title,
            poster,
            createdAt,
            updatedAt
      }
    }
`