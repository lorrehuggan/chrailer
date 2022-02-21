import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import { FETCH_CATEGORIES, FETCH_GENRE } from '../../lib/API/request';
import { IMovie } from '../../types/interface';
import Head from 'next/head';
import Hero from '../../components/GenrePage/Hero';
import Cards from '../../components/Cards';

interface Props {
  pageOne: IMovie[];
  pageTwo: IMovie[];
  pageThree: IMovie[];
  genre: IGenre;
}

interface IGenre {
  id: number;
  name: 'string';
}

const Genre: React.FC<Props> = ({ pageOne, pageTwo, pageThree, genre }) => {
  const [loading, setLoading] = useState(true);
  const randomNum = Math.floor(Math.random() * 10);

  useEffect(() => {
    if (pageOne && pageTwo && pageThree) {
      setLoading(false);
    }
  }, [pageOne, pageTwo, pageThree]);

  return (
    <>
      <Head>
        <title>{genre?.name}</title>
        <meta name="description" content={genre.name} />
      </Head>
      <Hero data={pageOne[randomNum]} name={genre.name} />
      <Cards loading={loading} data={pageOne?.slice(0, 10)} />
      <Cards loading={loading} data={pageOne?.slice(11, 20)} />
      <Cards loading={loading} data={pageTwo?.slice(0, 10)} />
      <Cards loading={loading} data={pageTwo?.slice(11, 20)} />
      <Cards loading={loading} data={pageThree?.slice(0, 10)} />
      <Cards loading={loading} data={pageThree?.slice(11, 20)} />
    </>
  );
};

export default Genre;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const getData = async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const pageOne = await getData(FETCH_CATEGORIES(String(params?.id), 1));
  const pageTwo = await getData(FETCH_CATEGORIES(String(params?.id), 2));
  const pageThree = await getData(FETCH_CATEGORIES(String(params?.id), 3));
  const getGenre = await getData(FETCH_GENRE());

  const genre = getGenre.genres.filter((genre: any) => {
    return genre.id == params?.id;
  });

  return {
    props: {
      pageOne: pageOne.results,
      pageTwo: pageTwo.results,
      pageThree: pageThree.results,
      genre: genre[0],
    },
  };
};
