import React from 'react';
import { IMovie } from '../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../lib/API';

type Props = {
  data: IMovie;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full aspect-card  bg-slate-900 relative rounded-lg cursor-pointer shadow">
      <Image
        src={IMAGE_PATH + data?.poster_path}
        alt={data?.title}
        layout="fill"
        className="rounded-md opacity-100 sm:opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default Card;
