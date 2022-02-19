import React, { useState } from 'react';
import { IMovie } from '../../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../../lib/API';
import VideoPlayer from '../../VideoPlayer';

type Props = {
  data: IMovie;
  name: string;
};

const Hero: React.FC<Props> = ({ data, name }) => {
  const [playFeaturedFilm, setPlayFeaturedFilm] = useState(false);

  return (
    <>
      <section className="relative h-96 w-full mx-auto shadow-2xl overflow-hidden md:w-4/5 md:rounded-lg bg-gray-800 xl:w-2/3 xl:h-[20rem]  ">
        <Image
          src={IMAGE_PATH + data?.backdrop_path}
          alt={data?.title}
          layout="fill"
          objectFit="cover"
          className="z-0 absolute inset-0 opacity-50 md:rounded-lg object-top blur-xl"
        />
        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70 flex items-center justify-center">
          <h1 className="z-90 text-7xl sm:text-9xl font-extrabold text-white">
            {name}
          </h1>
        </div>
      </section>

      {playFeaturedFilm && (
        <VideoPlayer title={data.title || data.original_title} />
      )}
    </>
  );
};

export default Hero;
