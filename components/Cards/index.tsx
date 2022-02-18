import React, { useEffect, useState } from 'react';
import { IMovie } from '../../types/interface';
import Card from '../Card';

type Props = {
  genre: string;
  data: IMovie[];
};

const x = process.env.APP_API;

const Cards: React.FC<Props> = ({ genre, data }) => {
  const sixCards = data.slice(0, 6);
  return (
    <section className="relative w-4/5 xl:w-2/3 mx-auto mt-4">
      <h3 className=" mb-4 uppercase text-2xl text-gray-700">{genre}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full gap-1 sm:gap-2">
        {sixCards.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
