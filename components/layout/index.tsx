import React from 'react';
import { useMenuState } from '../../context/menu/MenuProvider';
import Footer from '../Footer';
import Nav from '../Nav';

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  const [{ active }, dispatch] = useMenuState();
  return (
    <>
      <Nav />
      <main className={`min-h-[calc(100vh-10rem)] ${active ? 'hidden' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
