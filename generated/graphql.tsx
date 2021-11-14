import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Episode = {
  __typename?: 'Episode';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  /** A season associated to this episode */
  season: Season;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Genre = {
  __typename?: 'Genre';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Language = {
  __typename?: 'Language';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  /** A list of movies associated to this language */
  movies: Array<Movie>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Movie = {
  __typename?: 'Movie';
  createdAt: Scalars['DateTime'];
  /** A list of genres associated to this movie */
  genres: Array<Genre>;
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  /** A list of related movies to this */
  related: Array<Movie>;
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  episode?: Maybe<Episode>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  genre?: Maybe<Genre>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Maybe<Language>>>;
  movie?: Maybe<Movie>;
  movies?: Maybe<Array<Maybe<Movie>>>;
  searchMovieByTitle?: Maybe<Array<Maybe<Movie>>>;
  searchSeriesByTitle?: Maybe<Array<Maybe<Series>>>;
  season?: Maybe<Season>;
  seasons?: Maybe<Array<Maybe<Season>>>;
  serie?: Maybe<Series>;
  series?: Maybe<Array<Maybe<Series>>>;
  /** Collection of users in the database */
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryEpisodeArgs = {
  id: Scalars['Int'];
};


export type QueryGenreArgs = {
  id: Scalars['Int'];
};


export type QueryLanguageArgs = {
  id: Scalars['Int'];
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};


export type QueryMoviesArgs = {
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySearchMovieByTitleArgs = {
  title: Scalars['String'];
};


export type QuerySearchSeriesByTitleArgs = {
  title: Scalars['String'];
};


export type QuerySeasonArgs = {
  id: Scalars['Int'];
};


export type QuerySerieArgs = {
  id: Scalars['Int'];
};


export type QuerySeriesArgs = {
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Season = {
  __typename?: 'Season';
  createdAt: Scalars['DateTime'];
  episodes: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
  launchDate: Scalars['DateTime'];
  /** A series title associated to this season */
  series: Series;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Series = {
  __typename?: 'Series';
  createdAt: Scalars['DateTime'];
  /** A list of genres associated to this series */
  genres: Array<Genre>;
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  /** A list of related series to this */
  related: Array<Series>;
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  /** Seasons related to this series */
  seasons: Array<Season>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AllMoviesQueryVariables = Exact<{
  genre?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type AllMoviesQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movie', id: number, title: string, poster: string, genres: Array<{ __typename?: 'Genre', name?: string | null | undefined }> } | null | undefined> | null | undefined };

export type AllMoviesDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMoviesDetailsQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any, genres: Array<{ __typename?: 'Genre', name?: string | null | undefined }>, related: Array<{ __typename?: 'Movie', id: number, title: string, poster: string }> } | null | undefined> | null | undefined };

export type MovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MovieQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any, genres: Array<{ __typename?: 'Genre', name?: string | null | undefined }>, related: Array<{ __typename?: 'Movie', id: number, title: string, poster: string }> } | null | undefined };

export type SearchMovieByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchMovieByTitleQuery = { __typename?: 'Query', searchMovieByTitle?: Array<{ __typename?: 'Movie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any } | null | undefined> | null | undefined };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres?: Array<{ __typename?: 'Genre', id?: number | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined };

export type AllSeasonsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSeasonsQuery = { __typename?: 'Query', seasons?: Array<{ __typename?: 'Season', id: number, title: string } | null | undefined> | null | undefined };

export type AllSeriesQueryVariables = Exact<{
  genre?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type AllSeriesQuery = { __typename?: 'Query', series?: Array<{ __typename?: 'Series', id: number, title: string, poster: string, genres: Array<{ __typename?: 'Genre', name?: string | null | undefined }> } | null | undefined> | null | undefined };

export type AllSeriesDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSeriesDetailsQuery = { __typename?: 'Query', series?: Array<{ __typename?: 'Series', id: number, title: string, imdbRating: number, plot: string, poster: string, rating: string, release: any, runtime: number, year: number, totalSeasons: number, genres: Array<{ __typename?: 'Genre', name?: string | null | undefined }>, related: Array<{ __typename?: 'Series', id: number, title: string }>, seasons: Array<{ __typename?: 'Season', id: number, title: string }> } | null | undefined> | null | undefined };

export type SeriesQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SeriesQuery = { __typename?: 'Query', serie?: { __typename?: 'Series', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any, totalSeasons: number, genres: Array<{ __typename?: 'Genre', name?: string | null | undefined }>, seasons: Array<{ __typename?: 'Season', id: number, title: string }>, related: Array<{ __typename?: 'Series', id: number, title: string, poster: string }> } | null | undefined };

export type SearchSeriesByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchSeriesByTitleQuery = { __typename?: 'Query', searchSeriesByTitle?: Array<{ __typename?: 'Series', id: number, title: string, poster: string, createdAt: any, updatedAt: any } | null | undefined> | null | undefined };


export const AllMoviesDocument = gql`
    query allMovies($genre: [String]) {
  movies(genre: $genre) {
    id
    title
    poster
    genres {
      name
    }
  }
}
    `;

/**
 * __useAllMoviesQuery__
 *
 * To run a query within a React component, call `useAllMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMoviesQuery({
 *   variables: {
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useAllMoviesQuery(baseOptions?: Apollo.QueryHookOptions<AllMoviesQuery, AllMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMoviesQuery, AllMoviesQueryVariables>(AllMoviesDocument, options);
      }
export function useAllMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMoviesQuery, AllMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMoviesQuery, AllMoviesQueryVariables>(AllMoviesDocument, options);
        }
export type AllMoviesQueryHookResult = ReturnType<typeof useAllMoviesQuery>;
export type AllMoviesLazyQueryHookResult = ReturnType<typeof useAllMoviesLazyQuery>;
export type AllMoviesQueryResult = Apollo.QueryResult<AllMoviesQuery, AllMoviesQueryVariables>;
export const AllMoviesDetailsDocument = gql`
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
    createdAt
    updatedAt
    related {
      id
      title
      poster
    }
  }
}
    `;

/**
 * __useAllMoviesDetailsQuery__
 *
 * To run a query within a React component, call `useAllMoviesDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMoviesDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMoviesDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMoviesDetailsQuery(baseOptions?: Apollo.QueryHookOptions<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>(AllMoviesDetailsDocument, options);
      }
export function useAllMoviesDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>(AllMoviesDetailsDocument, options);
        }
export type AllMoviesDetailsQueryHookResult = ReturnType<typeof useAllMoviesDetailsQuery>;
export type AllMoviesDetailsLazyQueryHookResult = ReturnType<typeof useAllMoviesDetailsLazyQuery>;
export type AllMoviesDetailsQueryResult = Apollo.QueryResult<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>;
export const MovieDocument = gql`
    query movie($id: Int!) {
  movie(id: $id) {
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
    related {
      id
      title
      poster
    }
  }
}
    `;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieQuery(baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
      }
export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
        }
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const SearchMovieByTitleDocument = gql`
    query searchMovieByTitle($title: String!) {
  searchMovieByTitle(title: $title) {
    id
    title
    year
    rating
    release
    runtime
    plot
    poster
    imdbRating
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSearchMovieByTitleQuery__
 *
 * To run a query within a React component, call `useSearchMovieByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMovieByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMovieByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchMovieByTitleQuery(baseOptions: Apollo.QueryHookOptions<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>(SearchMovieByTitleDocument, options);
      }
export function useSearchMovieByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>(SearchMovieByTitleDocument, options);
        }
export type SearchMovieByTitleQueryHookResult = ReturnType<typeof useSearchMovieByTitleQuery>;
export type SearchMovieByTitleLazyQueryHookResult = ReturnType<typeof useSearchMovieByTitleLazyQuery>;
export type SearchMovieByTitleQueryResult = Apollo.QueryResult<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>;
export const GenresDocument = gql`
    query genres {
  genres {
    id
    name
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresQuery(baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
      }
export function useGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }
export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
export const AllSeasonsDocument = gql`
    query allSeasons {
  seasons {
    id
    title
  }
}
    `;

/**
 * __useAllSeasonsQuery__
 *
 * To run a query within a React component, call `useAllSeasonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSeasonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSeasonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSeasonsQuery(baseOptions?: Apollo.QueryHookOptions<AllSeasonsQuery, AllSeasonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSeasonsQuery, AllSeasonsQueryVariables>(AllSeasonsDocument, options);
      }
export function useAllSeasonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSeasonsQuery, AllSeasonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSeasonsQuery, AllSeasonsQueryVariables>(AllSeasonsDocument, options);
        }
export type AllSeasonsQueryHookResult = ReturnType<typeof useAllSeasonsQuery>;
export type AllSeasonsLazyQueryHookResult = ReturnType<typeof useAllSeasonsLazyQuery>;
export type AllSeasonsQueryResult = Apollo.QueryResult<AllSeasonsQuery, AllSeasonsQueryVariables>;
export const AllSeriesDocument = gql`
    query allSeries($genre: [String]) {
  series(genre: $genre) {
    id
    title
    poster
    genres {
      name
    }
  }
}
    `;

/**
 * __useAllSeriesQuery__
 *
 * To run a query within a React component, call `useAllSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSeriesQuery({
 *   variables: {
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useAllSeriesQuery(baseOptions?: Apollo.QueryHookOptions<AllSeriesQuery, AllSeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSeriesQuery, AllSeriesQueryVariables>(AllSeriesDocument, options);
      }
export function useAllSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSeriesQuery, AllSeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSeriesQuery, AllSeriesQueryVariables>(AllSeriesDocument, options);
        }
export type AllSeriesQueryHookResult = ReturnType<typeof useAllSeriesQuery>;
export type AllSeriesLazyQueryHookResult = ReturnType<typeof useAllSeriesLazyQuery>;
export type AllSeriesQueryResult = Apollo.QueryResult<AllSeriesQuery, AllSeriesQueryVariables>;
export const AllSeriesDetailsDocument = gql`
    query AllSeriesDetails {
  series {
    id
    title
    genres {
      name
    }
    imdbRating
    plot
    poster
    rating
    release
    runtime
    year
    totalSeasons
    related {
      id
      title
    }
    seasons {
      id
      title
    }
  }
}
    `;

/**
 * __useAllSeriesDetailsQuery__
 *
 * To run a query within a React component, call `useAllSeriesDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSeriesDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSeriesDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSeriesDetailsQuery(baseOptions?: Apollo.QueryHookOptions<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>(AllSeriesDetailsDocument, options);
      }
export function useAllSeriesDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>(AllSeriesDetailsDocument, options);
        }
export type AllSeriesDetailsQueryHookResult = ReturnType<typeof useAllSeriesDetailsQuery>;
export type AllSeriesDetailsLazyQueryHookResult = ReturnType<typeof useAllSeriesDetailsLazyQuery>;
export type AllSeriesDetailsQueryResult = Apollo.QueryResult<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>;
export const SeriesDocument = gql`
    query series($id: Int!) {
  serie(id: $id) {
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
    related {
      id
      title
      poster
    }
  }
}
    `;

/**
 * __useSeriesQuery__
 *
 * To run a query within a React component, call `useSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeriesQuery(baseOptions: Apollo.QueryHookOptions<SeriesQuery, SeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeriesQuery, SeriesQueryVariables>(SeriesDocument, options);
      }
export function useSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeriesQuery, SeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeriesQuery, SeriesQueryVariables>(SeriesDocument, options);
        }
export type SeriesQueryHookResult = ReturnType<typeof useSeriesQuery>;
export type SeriesLazyQueryHookResult = ReturnType<typeof useSeriesLazyQuery>;
export type SeriesQueryResult = Apollo.QueryResult<SeriesQuery, SeriesQueryVariables>;
export const SearchSeriesByTitleDocument = gql`
    query searchSeriesByTitle($title: String!) {
  searchSeriesByTitle(title: $title) {
    id
    title
    poster
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSearchSeriesByTitleQuery__
 *
 * To run a query within a React component, call `useSearchSeriesByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSeriesByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSeriesByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchSeriesByTitleQuery(baseOptions: Apollo.QueryHookOptions<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>(SearchSeriesByTitleDocument, options);
      }
export function useSearchSeriesByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>(SearchSeriesByTitleDocument, options);
        }
export type SearchSeriesByTitleQueryHookResult = ReturnType<typeof useSearchSeriesByTitleQuery>;
export type SearchSeriesByTitleLazyQueryHookResult = ReturnType<typeof useSearchSeriesByTitleLazyQuery>;
export type SearchSeriesByTitleQueryResult = Apollo.QueryResult<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>;