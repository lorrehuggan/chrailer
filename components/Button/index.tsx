import React from 'react';

type Props = {
  onClick?: () => void;
  margin?: string;
};

const Button: React.FC<Props> = ({ onClick, children, margin }) => {
  return (
    <button
      onClick={onClick}
      className={`mt-3 text-sm cursor-pointer bg-blue-200 hover:bg-blue-300 p-2 sm:p-2 rounded-sm transition-colors duration-200 ease-in-out ${
        margin ? margin : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
