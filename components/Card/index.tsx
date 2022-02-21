import React from 'react';
import { IMovie } from '../../types/interface';
import Image from 'next/image';
import { IMAGE_PATH } from '../../lib/API';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  data: IMovie;
  loading: boolean;
  idx: number;
};

const Card: React.FC<Props> = ({ data, loading, idx }) => {
  const ANIMATION_CONTAINER = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: { delay: idx / 4, duration: 0.5 } },
  };
  return (
    <motion.div
      variants={ANIMATION_CONTAINER}
      initial="hidden"
      animate="show"
      className="w-48 h-72 md:h-80 bg-slate-200 relative rounded-lg cursor-pointer snap-start flex-shrink-0 lg:w-56"
    >
      {!loading && (
        <Link href={`/film/${data?.id}`} passHref>
          <Image
            src={IMAGE_PATH + data?.poster_path}
            alt={data?.title}
            layout="fill"
            className="rounded-md opacity-100 sm:opacity-90 hover:opacity-[1.5] transition duration-300 ease-in-out"
          />
        </Link>
      )}
    </motion.div>
  );
};

export default Card;
