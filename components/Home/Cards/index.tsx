import React, { useEffect, useState } from 'react';
import { IMovie } from '../../../types/interface';
import Card from '../../Card';

type Props = {
  genreID: string;
  name: string;
};

type ICategory = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

const API = process.env.NEXT_PUBLIC_API;

const Cards: React.FC<Props> = ({ genreID, name }) => {
  const [data, setData] = useState<ICategory | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&include_adult=false&page=1&with_genres=${genreID}`
      );
      const json = await res.json();
      setData(json);
      return json;
    })();
  }, [genreID]);

  const results = data?.results;
  const firstSixFilms = results?.slice(0, 6);

  return (
    <section className="relative w-4/5 xl:w-2/3 mx-auto mt-4">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-full gap-1 sm:gap-2">
        {firstSixFilms?.map((data: IMovie) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
