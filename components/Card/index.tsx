import React from 'react';
import { IMovie } from '../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../lib/API';
import Link from 'next/link';

type Props = {
  data: IMovie;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <Link href={`/film/${data.id}`} passHref>
      <div className="w-48 aspect-card bg-slate-900 relative rounded-lg cursor-pointer shadow snap-start flex-shrink-0 lg:w-56">
        <Image
          src={IMAGE_PATH + data?.poster_path}
          alt={data?.title}
          layout="fill"
          className="rounded-md opacity-100 sm:opacity-90 hover:opacity-100 transition duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};

export default Card;
