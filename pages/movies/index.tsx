import Head from "next/head";
import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import { GetServerSideProps } from 'next';
import MovieCard from "../../components/items/MovieCard";
import apolloClient from '../../lib/apollo/apolloClient';
import { AllMoviesDocument, AllMoviesQuery, AllMoviesQueryVariables, Genre, GenresDocument, GenresQuery, GenresQueryVariables, Movie } from "../../generated/graphql";
import { useRouter } from 'next/dist/client/router';

export default function Movies({ movies, genres }: { movies: Movie[], genres: Genre[] }) {

    const router = useRouter()
    const { g } = router.query
    const [genreQuery, setGenreQuery] = useState<string>(g as string || "")

    useEffect(() => {
        if (genreQuery) {
            router.push({
                query: { g: genreQuery }
            })
        } else {
            router.replace(router.pathname)
        }
    }, [genreQuery])

    return (
        <Layout home={false}>
            <Head>
                <title>Movies</title>
            </Head>
            <h4 className='mb-4 text-2xl font-bold'>
                Movies
            </h4>
            <section className="movies-filters mb-8">
                <div className="flex flex-row">
                    {
                        genres?.length > 0 &&
                        <select
                            className="bg-backgroundSecondary p-1 px-3 rounded-lg border-0 focus:border-0"
                            defaultValue={genreQuery}
                            onChange={(e) => setGenreQuery(e.target.value)}
                        >
                            <option value="" >All</option>
                            {genres.map(g => <option key={g?.id} value={g?.name || ""}>{g?.name || ""}</option>)}
                        </select>
                    }
                </div>
            </section>
            <section className="max-w-max flex flex-row gap-x-4 gap-y-8 flex-wrap justify-around">
                <>
                    {movies.length === 0 ? "No movies found" : null}
                    {movies?.map(m => <MovieCard movie={m} key={m.id} />)}
                </>
            </section>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const { data, error } = await apolloClient.query<AllMoviesQuery, AllMoviesQueryVariables>({
        query: AllMoviesDocument,
        variables: { genre: query?.g as string }
    });
    if (error) console.error(error)
    const movies = data?.movies || []

    const { data: genreData, error: genreError } = await apolloClient.query<GenresQuery, GenresQueryVariables>({
        query: GenresDocument,
    })
    if (genreError) console.error(error)
    const genres = genreData?.genres || []

    return {
        props: {
            movies: movies,
            genres: genres
        }
    }
}