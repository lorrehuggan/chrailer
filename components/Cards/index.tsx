import React from 'react';
import { IMovie } from '../../types/interface';
import Card from '../Card';
import { motion } from 'framer-motion';

type Props = {
  data: IMovie[] | undefined;
  loading: boolean;
  title?: string;
};

const Cards: React.FC<Props> = ({ data, loading, title }) => {
  return (
    <section className="relative w-11/12 md:w-4/5  xl:w-2/3 mx-auto mt-4">
      {title && (
        <div className="flex row justify-between items-center mb-4">
          <h3 className="text-xl text-neutral-50 underline-offset-4">
            {title}
          </h3>
        </div>
      )}
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
