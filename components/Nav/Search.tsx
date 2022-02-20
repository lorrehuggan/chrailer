import React from 'react';

interface ISearch {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: IValue;
}
interface IValue {
  query: string;
}

const Search: React.FC<ISearch> = ({ handleSubmit, value, handleChange }) => {
  return (
    <div className=" sm:flex ml-2 mr-2 sm:mr-0">
      <form onSubmit={handleSubmit} className="flex row">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
          name="query"
          value={value.query}
          onChange={handleChange}
          placeholder="Search"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-6 sm:w-6 ml-2 text-gray-600 hover:text-gray-800 "
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
  );
};

export default Search;
