import React from 'react';

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="h-20 w-full flex flex-row justify-center">
      <div className="w-4/5 xl:w-2/3 flex flex-row items-center justify-between">
        <h2 className="text-3xl font-black">Mulas</h2>
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
    </nav>
  );
};

export default Nav;
