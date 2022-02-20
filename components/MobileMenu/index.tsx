import React, { useEffect, useState } from 'react';
import { FETCH_GENRE } from '../../lib/API/request';
import { IGenre } from '../../types/interface';
import Link from 'next/link';
import { useMenuState } from '../../context/menu/MenuProvider';
import useSWR, { SWRResponse } from 'swr';

interface IMenu {}

interface IGenreResponse {
  genres: IGenre[];
}

const Menu: React.FC<IMenu> = () => {
  const [{ active }, dispatch] = useMenuState();
  const { data, error }: SWRResponse<IGenreResponse, any> = useSWR(
    FETCH_GENRE()
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log(data);
      setLoading(false);
    }
  }, [data]);

  return (
    <section
      className={`w-[100%] h-screen bg-white absolute ${
        active ? 'right-0' : '-right-100'
      } transition-all ease-in-out`}
    >
      {data?.genres.map((genre: IGenre) => {
        return (
          <Link key={genre.id} href={`/genre/${genre.id}`} passHref>
            <div
              onClick={() => dispatch({ type: 'ACTIVE', active: false })}
              className="w-4/5 mx-auto flex items-center justify-left py-5 border-2 mb-2 rounded px-2 bg-gray-100"
            >
              <h2 className="text-gray-600">{genre.name}</h2>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Menu;
