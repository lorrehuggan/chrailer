import React, { createContext, useContext, useReducer } from 'react';

export const SearchContext = createContext();
//TODO Refactor to TypeScript

export const SearchProvider = ({ initialState, reducer, children }) => (
  <SearchContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SearchContext.Provider>
);

export const useSearchState = () => useContext(SearchContext);
