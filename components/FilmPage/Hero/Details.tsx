import React from 'react';
import { IMoviePage } from '../../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../../lib/API';

interface Props {
  data: IMoviePage;
}

interface IPlay extends Props {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  play: boolean;
}

const Details: React.FC<IPlay> = ({ data, play, setPlay }) => {
  return (
    <div className="z-10 absolute inset-0 w-full h-full p-3 sm:p-6">
      <div className="w-full h-full relative">
        <Title data={data} />
        <Info data={data} play={play} setPlay={setPlay} />
        <Poster data={data} />
      </div>
    </div>
  );
};

export default Details;

const Title: React.FC<Props> = ({ data }) => {
  return (
    <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray-50 font-black ">
      {data?.title || data?.original_title}
    </h1>
  );
};

const Info: React.FC<IPlay> = ({ data, play, setPlay }) => {
  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div className="absolute bottom-0 left-0">
      <h3 className="text-2xl text-gray-50 font-bold">{`Rated ${
        data?.vote_average * 10
      }%`}</h3>
      <p className="w-full text-gray-50 text-xs sm:w-2/3 md:text-sm xl:text-base">
        {data?.overview}
      </p>
      <button
        onClick={handlePlay}
        className="mt-3 cursor-pointer bg-blue-400 hover:bg-lime-500 p-1 sm:p-2 rounded-md font-black transition-colors duration-200 ease-in-out"
      >
        {play ? 'stop...' : 'play...'}
      </button>
    </div>
  );
};

const Poster: React.FC<Props> = ({ data }) => {
  return (
    <div className="hidden sm:absolute sm:flex right-0 bottom-0 w-16 sm:w-20 sm:h-32 md:w-28 md:h-40 bg-gray-900 shadow-lg rounded-sm">
      <Image
        src={IMAGE_PATH + data?.poster_path}
        alt={data?.title}
        layout="fill"
      />
    </div>
  );
};
