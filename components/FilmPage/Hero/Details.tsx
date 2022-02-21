import React from 'react';
import { IMoviePage } from '../../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../../lib/API';
import Button from '../../Button';

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
      <Button onClick={handlePlay}>
        {' '}
        {play ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </Button>
    </div>
  );
};

const Poster: React.FC<Props> = ({ data }) => {
  return (
    <div className="hidden sm:absolute sm:flex right-0 bottom-0 h-40 aspect-card lg:h-56 xl:h-72 bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <Image
        src={IMAGE_PATH + data?.poster_path}
        alt={data?.title}
        layout="fill"
      />
    </div>
  );
};
