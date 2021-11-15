import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import apolloClient from '../lib/apollo/apolloClient';
import MovieCard from '../components/items/MovieCard';
import { AllMoviesDocument, Movie, AllMoviesQuery, AllMoviesQueryVariables, AllSeriesDocument, AllSeriesQuery, AllSeriesQueryVariables, Serie } from '../generated/graphql';
import SeriesCard from '../components/items/SeriesCard';

export default function Home({ movies, series }: { movies: Movie[], series: Serie[] }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="main-wrapper">
        <h2 className='mb-4 text-lg font-bold'>
          <Link href="/movies">
            Movies
          </Link>
        </h2>
        <section className='latest-movies-section flex flex-row gap-x-12 gap-y-8 flex-wrap justify-evenly'>
          {movies.map(m => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </section>
        <h2 className='mt-8 mb-4 text-lg font-bold'>
          <Link href="/series">
            Series
          </Link>
        </h2>
        <section className="latest-series-section flex flex-row gap-x-12 gap-y-8 flex-wrap justify-evenly">
          {series.map(s => (
            <SeriesCard series={s} key={s.id} />
          ))}
        </section>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, error } = await apolloClient.query<AllMoviesQuery, AllMoviesQueryVariables>({
    query: AllMoviesDocument,
    variables: {
      take: 12
    }
  })
  if (error) console.error(error)

  const { data: seriesData, error: seriesError } = await apolloClient.query<AllSeriesQuery, AllSeriesQueryVariables>({
    query: AllSeriesDocument,
    variables: {
      take: 12
    }
  });
  if (seriesError) console.error(error)

  const movies = data?.movies || []
  const series = seriesData?.series || []

  return {
    props: {
      movies: movies,
      series: series,
    },
  }
}
