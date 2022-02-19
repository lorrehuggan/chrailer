import React, { useEffect, useState } from 'react';
import { FETCH_CATEGORIES } from '../../../lib/API/request';
import { IMovie } from '../../../types/interface';
import Link from 'next/link';
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

const Cards: React.FC<Props> = ({ genreID, name }) => {
  const [data, setData] = useState<ICategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(FETCH_CATEGORIES(genreID, 1));
        const json = await res.json();
        setData(json);
        setLoading(false);
        return json;
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
        console.log(error.message);
      }
    })();
  }, [genreID]);

  const results = data?.results;

  const placeholderArray = new Array(10).fill(0);

  return (
    <section className="relative w-11/12 md:w-4/5  xl:w-2/3 mx-auto mt-4">
      <div className="flex row justify-between items-center mb-4">
        <h3 className="  uppercase text-2xl text-gray-700">
          {loading ? 'Loading' : name}
        </h3>
        <Link href={loading ? '' : `/genre/${genreID}`} passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 cursor-pointer hover:text-gray-500 transition-colors duration-300 ease-in-out"
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
        </Link>
      </div>
      {loading && (
        <div className="flex overflow-x-auto snap-x space-x-2">
          {placeholderArray.map((arr, i) => {
            return <Card key={i} loading={loading} data={data?.results[0]!} />;
          })}
        </div>
      )}
      {!loading && (
        <div className="flex overflow-x-auto snap-x space-x-2">
          {results &&
            results?.map((data: IMovie) => {
              return <Card key={data.id} loading={loading} data={data} />;
            })}
        </div>
      )}
    </section>
  );
};

export default Cards;
