import React from 'react';
import { IMovie } from '../../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../../lib/API';
import Link from 'next/link';
import Button from '../../Button';

interface Props extends Data {
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  play: boolean;
}

interface Data {
  data: IMovie;
}

const Details: React.FC<Props> = ({ data, setPlay, play }) => {
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

const Title: React.FC<Data> = ({ data }) => {
  return (
    <h1 className="text-3xl sm:text-5xl lg:text-7xl text-gray-50 font-black ">
      {data?.title || data?.original_title}
    </h1>
  );
};

const Info: React.FC<Props> = ({ data, play, setPlay }) => {
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
      <Link href={`/film/${data.id}`} passHref>
        <Button margin="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </Button>
      </Link>
      <Button onClick={handlePlay}>
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
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        )}
      </Button>
    </div>
  );
};

const Poster: React.FC<Data> = ({ data }) => {
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
