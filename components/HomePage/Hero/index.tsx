import React, { useState } from 'react';
import { IMovie } from '../../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../../lib/API';
import Details from './Details';
import VideoPlayer from '../../VideoPlayer';
import { motion } from 'framer-motion';
import { ANIMATION_CONTAINER } from './animations';

type Props = {
  data: IMovie;
};

const Hero: React.FC<Props> = ({ data }) => {
  const [playFeaturedFilm, setPlayFeaturedFilm] = useState(false);

  return (
    <motion.section
      variants={ANIMATION_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <div className="relative h-80 sm:h-96 w-full mx-auto shadow-2xl overflow-hidden md:w-4/5 md:rounded-lg bg-gray-800 xl:w-2/3 xl:h-[30rem]">
        <Image
          src={IMAGE_PATH + data?.backdrop_path}
          alt={data?.title}
          layout="fill"
          objectFit="cover"
          className="z-0 absolute inset-0 opacity-50 md:rounded-lg object-top"
        />
        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70">
          asd
        </div>
        <Details
          data={data}
          setPlay={setPlayFeaturedFilm}
          play={playFeaturedFilm}
        />
      </div>

      {playFeaturedFilm && (
        <VideoPlayer title={data.title || data.original_title} />
      )}
    </motion.section>
  );
};

export default Hero;
