import React, { useEffect, useState } from 'react';
import { FETCH_GENRE } from '../../lib/API/request';
import { IGenre } from '../../types/interface';
import Link from 'next/link';
import { useMenuState } from '../../context/menu/MenuProvider';

interface IMenu {}

const Menu: React.FC<IMenu> = () => {
  const [genres, setGenres] = useState<IGenre[] | null>(null);
  const [{ active }, dispatch] = useMenuState();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(FETCH_GENRE());
        const json = await res.json();
        setGenres(json.genres);
        return json;
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <section
      className={`w-[100%] h-screen bg-white absolute ${
        active ? 'right-0' : '-right-100'
      } transition-all ease-in-out`}
    >
      {genres?.map((genre: IGenre) => {
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
