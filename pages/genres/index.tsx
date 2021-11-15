import { Genre } from ".prisma/client";
import { gql } from "apollo-server-micro";
import Date from '../../components/date'
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import Layout from "../../components/layout/layout";
import apolloClient from "../../lib/apollo/apolloClient";
import { format } from 'date-fns';
import prisma from "../../lib/PrismaClient/prisma";

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


export const getStaticProps: GetStaticProps = async () => {
    var genres = await prisma.genre.findMany({});
    const genresStr = JSON.stringify(genres);
    genres = JSON.parse(genresStr);

    return {
        props: {
            genres: genres
        }
    }
}