import { Genre } from ".prisma/client";
import { gql } from "apollo-server-micro";
import Date from '../../components/date'
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/layout/layout";
import apolloClient from "../../lib/apollo/apolloClient";
import { format } from 'date-fns';

export default function GenrePage({ genres }: { genres: Genre[] }) {
    return (
        <Layout home={false}>
            <Head>
                <title>Genres</title>
            </Head>
            {
                genres.map((genre) => (
                    <article>
                        <h1>{genre.name}</h1>
                        <div>
                            {/* <Date dateString={format(genre.createdAt, 'LLLL d, yyyy')} /> */}
                        </div>
                    </article>
                ))
            }
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = gql`
        query genres {
                genres {
                id,
                name,
            }
        }
    `
    const { data, error } = await apolloClient.query<{ genres?: Genre[] }>({ query: query });
    if (error) console.error(error)

    const genres = data?.genres || []
    return {
        props: {
            genres: genres
        }
    }
}