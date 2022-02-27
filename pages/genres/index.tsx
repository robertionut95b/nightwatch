import { Genre } from '.prisma/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout/layout';
import prisma from '../../lib/PrismaClient/prisma';

export default function GenrePage({
  genres,
}: {
  genres: Genre[];
}): JSX.Element {
  return (
    <Layout home={false}>
      <Head>
        <title>Genres</title>
      </Head>
      {genres.map((genre) => (
        <article key={genre.id}>
          <h1>{genre.name}</h1>
          <div>
            {/* <Date dateString={format(genre.createdAt, 'LLLL d, yyyy')} /> */}
          </div>
        </article>
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let genres = await prisma.genre.findMany({});
  const genresStr = JSON.stringify(genres);
  genres = JSON.parse(genresStr);

  return {
    props: {
      genres: genres,
    },
    revalidate: 60,
  };
};
