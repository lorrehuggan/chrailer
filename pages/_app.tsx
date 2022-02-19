import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { SearchProvider } from '../context/search/SearchProvider';
import {
  initSearchState,
  searchReducer,
} from '../context/search/SearchReducer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider initialState={initSearchState} reducer={searchReducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}

export default MyApp;
