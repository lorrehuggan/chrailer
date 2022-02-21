import React from 'react';
import { IMovie } from '../../types/interface';
import Card from '../Card';
import { motion } from 'framer-motion';

type Props = {
  data: IMovie[] | undefined;
  loading: boolean;
};

const Cards: React.FC<Props> = ({ data, loading }) => {
  return (
    <section className="relative w-11/12 md:w-4/5  xl:w-2/3 mx-auto mt-4">
      <div className="flex overflow-x-auto snap-x space-x-2">
        {data &&
          data?.map((_data: IMovie, i) => {
            return (
              <Card key={_data.id} data={_data} idx={i} loading={loading} />
            );
          })}
      </div>
    </section>
  );
};

export default Cards;
