import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Cards from '../components/HomePage/Cards';
import Hero from '../components/HomePage/Hero';
import {
  FETCH_GENRE,
  FETCH_TOP_RATED,
  FETCH_TRENDING,
  FETCH_UPCOMING,
} from '../lib/API/request';
import { IGenre, IKeywords, IMovie } from '../types/interface';
import HomeCards from '../components/Cards';

interface Props {
  trending: IMovie[];
  upcoming: IMovie[];
  top_rated: IMovie[];

  genre: IGenre[];
}

const Home: NextPage<Props> = ({ trending, genre, upcoming, top_rated }) => {
  const featuredFilm = trending[2];

  const tags = trending.slice(0, 10).map((data) => {
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

      <HomeCards data={trending} title="Trending" loading={false} />
      <HomeCards data={upcoming} title="Coming Soon" loading={false} />
      <HomeCards data={top_rated} title="Top Rated" loading={false} />

      {genre
        .sort((a, b) => a.id * 2 - Math.floor(b.id / 2))
        .map((data) => {
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
  let trending = await getData(FETCH_TRENDING(1));
  let genre = await getData(FETCH_GENRE());
  let upcoming = await getData(FETCH_UPCOMING());
  let top_rated = await getData(FETCH_TOP_RATED());

  return {
    props: {
      trending: trending.results,
      genre: genre.genres,
      upcoming: upcoming.results,
      top_rated: top_rated.results,
    },
    revalidate: 259200,
  };
};
