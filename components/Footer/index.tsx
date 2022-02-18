import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="h-20 w-full flex flex-row justify-center">
      <div className="w-11/12 md:w-4/5 xl:w-2/3 flex flex-row items-center justify-between">
        <p className="text-xs">© 2022 Lorre Huggan</p>
      </div>
    </footer>
  );
};

export default Footer;
