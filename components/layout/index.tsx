import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="min-h-[calc(100vh-10rem)]  ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
