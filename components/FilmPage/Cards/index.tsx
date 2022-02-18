import React, { useEffect, useState } from 'react';
import { FETCH_CATEGORIES } from '../../../lib/API/request';
import { IMovie } from '../../../types/interface';
import Card from '../../Card';

type Props = {
  data: IMovie[] | null;
  name: string;
};

const Cards: React.FC<Props> = ({ data: films, name }) => {
  return (
    <section className="relative w-11/12 md:w-4/5 xl:w-2/3 mx-auto mt-4">
      <div className="flex row justify-between items-center mb-4">
        <h3 className="  uppercase text-2xl text-gray-700">{name}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex overflow-x-auto snap-x space-x-2">
        {films &&
          films?.map((film: IMovie) => {
            return <Card key={film.id} data={film} />;
          })}
      </div>
    </section>
  );
};

export default Cards;
