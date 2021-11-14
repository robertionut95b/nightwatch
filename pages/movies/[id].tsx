import Layout from '../../components/layout/layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import apolloClient from '../../lib/apollo/apolloClient'
import { ParsedUrlQuery } from 'querystring'
import MovieDetailsCard from '../../components/items/MovieDetailsCard';
import { AllMoviesDetailsDocument, Movie, AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables, MovieQuery, MovieQueryVariables, MovieDocument } from '../../generated/graphql';

interface IParams extends ParsedUrlQuery {
  id: string,
}

export default function MoviePage({ movie }: { movie: Movie }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <article>
        <MovieDetailsCard movie={movie} />
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
  return {
    props: {
      movie: movie
    },
  }
}