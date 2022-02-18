import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { FETCH_BY_ID } from '../../lib/API/request';
import { IMoviePage } from '../../types/interface';
import Head from 'next/head';
import Hero from '../../components/FilmPage/Hero';
import VideoPlayer from '../../components/VideoPlayer';

interface Props {
  filmData: IMoviePage;
}

export interface IPlaceholder {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  play: boolean;
}

const Film: React.FC<Props> = ({ filmData }) => {
  const [play, setPlay] = useState(false);

  return (
    <>
      <Head>
        <title>{filmData.title}</title>
        <meta name="description" content={filmData.overview} />
      </Head>
      <Hero data={filmData} play={play} setPlay={setPlay} />
      {!play && <VideoPlaceholder play={play} setPlay={setPlay} />}
      {play && (
        <VideoPlayer title={filmData.title || filmData.original_title} />
      )}
    </>
  );
};

export default Film;

const VideoPlaceholder: React.FC<IPlaceholder> = ({ play, setPlay }) => {
  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div className="w-full  md:w-4/5  xl:w-2/3 overflow-hidden  mx-auto mt-4 h-[400px] bg-black flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer h-28 w-28 mx-auto text-white hover:text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={handlePlay}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

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

  const filmData = await getData(FETCH_BY_ID(params?.id));

  return {
    props: {
      filmData,
    },
  };
};
