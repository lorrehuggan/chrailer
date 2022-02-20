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
import { SWRConfig } from 'swr';

const fetcher = (args: string) =>
  fetch(args).then((response) => response.json());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider initialState={initSearchState} reducer={searchReducer}>
      <MenuProvider initialState={initMenuState} reducer={menuReducer}>
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </MenuProvider>
    </SearchProvider>
  );
}

export default MyApp;
