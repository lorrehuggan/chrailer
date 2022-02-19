import React from 'react';
import { useMenuState } from '../../context/menu/MenuProvider';

interface IMenuButton {}

const MenuBurger: React.FC<IMenuButton> = () => {
  const [{ active }, dispatch] = useMenuState();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer sm:hidden"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={() => dispatch({ type: 'ACTIVE', active: !active })}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

export default MenuBurger;
