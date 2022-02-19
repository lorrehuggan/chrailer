import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchState } from '../../context/search/SearchProvider';
import { FETCH_QUERY } from '../../lib/API/request';
import { IMovie } from '../../types/interface';
import Menu from '../MobileMenu';
import Search from './Search';
import SearchResults from './SearchResults';
import MenuBurger from './MenuBurger';
import { useMenuState } from '../../context/menu/MenuProvider';

type Props = {};

const Nav = (props: Props) => {
  const [{ active }, menuDispatch] = useMenuState();
  const [value, setValue] = useState({ query: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [{ query }, dispatch] = useSearchState();
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<IMovie[] | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(FETCH_QUERY(1, query));
        const json = await res.json();
        setData(json.results);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    })();
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      query: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.query) {
      menuDispatch({
        type: 'ACTIVE',
        query: false,
      });
      setIsSearching(true);
    } else {
      return;
    }
    dispatch({
      type: 'SEARCH',
      query: value.query.trim(),
    });
    setValue({ query: '' });
  };

  return (
    <nav
      className={`${
        !isSearching ? 'h-20' : 'h-[27rem] lg:h-[30rem]'
      } w-full sticky top-0 z-50 bg-white transition-all duration-200`}
    >
      <section
        className={`w-4/5 xl:w-2/3 flex h-20 flex-row items-center justify-between mx-auto`}
      >
        <div>
          <Link href={`/`} passHref>
            <h2 className="text-xl sm:text-3xl font-black cursor-pointer">
              chrailer
            </h2>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className=" hidden sm:flex flex-row items-center text-xs">
            <Link href={`/genre/16`} passHref>
              <li className="ml-2 uppercase cursor-pointer">Anime</li>
            </Link>
            <Link href={`/genre/99`} passHref>
              <li className="ml-2 uppercase cursor-pointer">Documentary</li>
            </Link>
          </ul>
          <Search
            value={value}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <MenuBurger />
        </div>
      </section>
      {isSearching && (
        <SearchResults
          data={data!}
          query={query}
          loading={loading}
          setIsSearching={setIsSearching}
        />
      )}
      {active && <Menu />}
    </nav>
  );
};

export default Nav;
