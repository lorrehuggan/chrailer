import React from 'react';
import { IMovie } from '../../types/interface';
import Cards from '../Cards';

interface ISearchResults {
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  data: IMovie[] | undefined;
  loading: boolean;
}

const SearchResults: React.FC<ISearchResults> = ({
  setIsSearching,
  query,
  data,
  loading,
}) => {
  console.log(data?.length);

  return (
    <section>
      <div className="w-11/12 md:w-4/5 xl:w-2/3 mx-auto flex justify-between">
        <p className="uppercase font-bold text-gray-400">
          {data?.length === 0 || undefined
            ? `No results for ${query.trim()}`
            : query.trim()}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hover:text-red-500 cursor-pointer transition-colors duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setIsSearching(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div
        onClick={() => {
          setIsSearching(false);
        }}
      >
        <Cards data={data} loading={loading} />
      </div>
    </section>
  );
};
export default SearchResults;
