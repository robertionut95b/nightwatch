import { gql } from '@apollo/client';

export const CreateSerie = gql`
  mutation createSerie($title: String!, $genres: GenreCreateNestedManyWithoutSeriesInput, $plot: String!, $poster: String!, $imdbRating: Float!, $rating: String!, $release: DateTime!, $runtime: Int!, $year: Int!, $totalSeasons: Int!) {
    createSerie(data: {title: $title, genres: $genres, plot: $plot, poster: $poster, imdbRating: $imdbRating, rating: $rating, release: $release, runtime: $runtime, year: $year, totalSeasons: $totalSeasons}) {
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

export const CreateSerieSearch = gql`
  mutation createSerieSearch($title: String!, $genres: GenreCreateNestedManyWithoutSeriesInput, $plot: String!, $poster: String!, $imdbRating: Float!, $rating: String!, $release: DateTime!, $runtime: Int!, $year: Int!, $totalSeasons: Int!) {
    createSerie(data: {title: $title, genres: $genres, plot: $plot, poster: $poster, imdbRating: $imdbRating, rating: $rating, release: $release, runtime: $runtime, year: $year, totalSeasons: $totalSeasons}) {
      id,
      title,
      poster,
      createdAt,
      updatedAt
    }
  }
`