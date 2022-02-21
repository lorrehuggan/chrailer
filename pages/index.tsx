import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Cards from '../components/HomePage/Cards';
import Hero from '../components/HomePage/Hero';
import { FETCH_GENRE, FETCH_TRENDING } from '../lib/API/request';
import { IGenre, IMovie } from '../types/interface';
interface Props {
  trendingData: IMovie[];
  genreData: IGenre[];
}

const Home: NextPage<Props> = ({ trendingData, genreData }) => {
  const featuredFilm = trendingData[2];

  const tags = trendingData.slice(0, 10).map((data) => {
    return data.title;
  });

  return (
    <>
      <Head>
        <title>Chrailer</title>
        <meta name="description" content="Trailer Extravaganza" />
        <meta name="tags" content={tags.toString()} />
      </Head>
      <Hero data={featuredFilm} />
      {genreData.map((data) => {
        return (
          <Cards key={data.id} genreID={String(data.id)} name={data.name} />
        );
      })}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const getData = async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (error: any) {
      console.log(error.message);
    }
  };
  let trendingData = await getData(FETCH_TRENDING(1));
  let genreData = await getData(FETCH_GENRE());

  return {
    props: {
      trendingData: trendingData.results,
      genreData: genreData.genres,
    },
  };
};
