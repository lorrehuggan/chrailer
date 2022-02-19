import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { SearchProvider } from '../context/search/SearchProvider';
import { MenuProvider } from '../context/menu/MenuProvider';
import {
  initSearchState,
  searchReducer,
} from '../context/search/SearchReducer';
import { initMenuState, menuReducer } from '../context/menu/MenuReducer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider initialState={initSearchState} reducer={searchReducer}>
      <MenuProvider initialState={initMenuState} reducer={menuReducer}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuProvider>
    </SearchProvider>
  );
}

export default MyApp;
