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
      <div className="flex row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
        <h3 className="  uppercase text-2xl mb-2 text-gray-700">{name}</h3>
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
