import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import apolloClient from '../../lib/apollo/apolloClient'
import { ParsedUrlQuery } from 'querystring'
import MovieDetailsCard from '../../components/items/MovieDetailsCard';
import { AllMoviesDetailsDocument, Movie, AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables, MovieQuery, MovieQueryVariables, MovieDocument, MoviesQuery, MoviesQueryVariables, MoviesDocument } from '../../generated/graphql';

interface IParams extends ParsedUrlQuery {
  id: string,
}

export default function MoviePage({ movie, relatedMovies }: { movie: Movie, relatedMovies: Movie[] }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <article>
        <MovieDetailsCard movie={movie} relatedMovies={[]} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { data, error } = await apolloClient.query<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>({ query: AllMoviesDetailsDocument });

  if (error) console.error(error)
  const movies = data?.movies || []
  return {
    paths: movies.map((m) => {
      return {
        params: { id: String(m?.id) || "" }
      }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams
  const { data, error } = await apolloClient.query<MovieQuery, MovieQueryVariables>({
    query: MovieDocument,
    variables: { id: Number.parseInt(id) }
  });

  if (error) console.error(error)
  const movie = data?.movie

  const { data: relatedMoviesData, error: relatedMoviesError } = await apolloClient.query<MoviesQuery, MoviesQueryVariables>({
    query: MoviesDocument,
    variables: {
      id: movie?.id || Number(id),
      genre: movie?.genres.map(g => g.name)
    }
  });

  if (relatedMoviesError) console.error(relatedMoviesError)
  const relatedMovies = relatedMoviesData?.movies || []

  return {
    props: {
      movie: movie,
      relatedMovies: relatedMovies
    },
  }
}