import React, { createContext, useContext, useReducer } from 'react';

export const MenuContext = createContext();
//TODO Refactor to TypeScript

export const MenuProvider = ({ initialState, reducer, children }) => (
  <MenuContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MenuContext.Provider>
);

export const useMenuState = () => useContext(MenuContext);
