import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchState } from '../../context/search/SearchProvider';
import { FETCH_QUERY } from '../../lib/API/request';
import { IMovieResults } from '../../types/interface';
import Menu from '../MobileMenu';
import Search from './Search';
import SearchResults from './SearchResults';
import MenuBurger from './MenuBurger';
import { useMenuState } from '../../context/menu/MenuProvider';
import useSWR, { SWRResponse } from 'swr';

type Props = {};

const Nav = (props: Props) => {
  const [{ active }, menuDispatch] = useMenuState();
  const [value, setValue] = useState({ query: '' });
  const [loading, setLoading] = useState(true);
  const [{ query }, dispatch] = useSearchState();
  const [isSearching, setIsSearching] = useState(false);
  const [yAxis, setYAxis] = useState(0);

  const { data, error }: SWRResponse<IMovieResults, any> = useSWR(
    FETCH_QUERY(1, query)
  );

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

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

  const handleScroll = () => {
    let scrollYPos = window.scrollY;
    console.log(scrollYPos);
    setYAxis(scrollYPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${isSearching ? 'h-[27rem] lg:h-[30rem]' : 'h-20'} 
      w-full sticky top-0 z-50 transition-all duration-200 ${
        yAxis > 200
          ? 'border-b-[1px] border-neutral-300 bg-white/90'
          : 'bg-white'
      } `}
    >
      <section
        className={`w-[95%] px-2  sm:px-0 md:w-4/5 xl:w-2/3 flex h-20 flex-row items-center justify-between mx-auto`}
      >
        <div>
          <Link href={`/`} passHref>
            <h2 className="text-xl sm:text-5xl uppercase font-black text-indigo-500 hover:text-indigo-700 transition-colors duration-500 cursor-pointer">
              chrailer
            </h2>
          </Link>
        </div>
        <div className=" flex items-center">
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
          data={data?.results}
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
