import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Cards from '../components/Home/Cards';
import Hero from '../components/Home/Hero';
import { FETCH_GENRE, FETCH_TRENDING } from '../lib/API/request';
import { IGenre, IMovie } from '../types/interface';
interface Props {
  trendingData: IMovie[];
  genreData: IGenre[];
}

const Home: NextPage<Props> = ({ trendingData, genreData }) => {

  const featuredFilm = trendingData[6];
  return (
    <>
      <Head>
        <title>Mulas</title>
        <meta name="description" content="Trailer Extravaganza" />
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
