import React from 'react';
import { IMovie } from '../../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../../lib/API';
import Details from './Details';

type Props = {
  data: IMovie;
};

const Hero: React.FC<Props> = ({ data }) => {
  return (
    <section
      className="relative h-96 w-4/5 mx-auto overflow-hidden rounded-lg 
    bg-gray-800 xl:w-2/3 xl:h-[30rem] shadow-2xl"
    >
      <Image
        src={IMAGE_PATH + data?.backdrop_path}
        alt={data?.title}
        layout="fill"
        objectFit="cover"
        className="z-0 absolute inset-0 opacity-50 rounded-lg object-top"
      />
      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70">
        asd
      </div>
      <Details data={data} />
    </section>
  );
};

export default Hero;
