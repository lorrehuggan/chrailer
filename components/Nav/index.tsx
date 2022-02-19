import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchState } from '../../context/search/SearchProvider';

type Props = {};

const Nav = (props: Props) => {
  const [value, setValue] = useState({ query: '' });
  const [{}, dispatch] = useSearchState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      query: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'SEARCH',
      query: value.query.trim(),
    });
    setValue({ query: '' });
  };

  return (
    <nav className="h-20 w-full flex sticky top-0 z-50 bg-white">
      <div className="w-4/5 xl:w-2/3 flex flex-row items-center justify-between mx-auto">
        <div>
          <Link href={`/`} passHref>
            <h2 className="text-3xl font-black cursor-pointer">Mulas</h2>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden sm:flex mr-4">
            <form onSubmit={handleSubmit} className="flex row">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                name="query"
                value={value.query}
                onChange={handleChange}
              />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-1 text-gray-600 hover:text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <ul className=" hidden sm:flex flex-row items-center text-xs">
            <li className="uppercase">Contact</li>
            <li className="ml-2 uppercase">Movies</li>
            <li className="ml-2 uppercase">Tv Show</li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
