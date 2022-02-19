import React, { useEffect, useState } from 'react';
import { IMovie } from '../../types/interface';
import Link from 'next/link';
import Card from '../Card';

type Props = {
  data: IMovie[];
};

const Cards: React.FC<Props> = ({ data }) => {
  return (
    <section className="relative w-11/12 md:w-4/5  xl:w-2/3 mx-auto mt-8">
      <div className="flex overflow-x-auto snap-x space-x-2">
        {data &&
          data?.map((_data: IMovie) => {
            return <Card key={_data.id} data={_data} />;
          })}
      </div>
    </section>
  );
};

export default Cards;
