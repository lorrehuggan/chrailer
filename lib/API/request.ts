import { BASE_URL, API_KEY } from '.';

const API_PARAMS = (page: number | string) =>
  `?api_key=${API_KEY}&language=en-US&include_adult=false&page=${page}`;

export const FETCH_TRENDING = (page: number): string => {
  return BASE_URL + `trending/all/day${API_PARAMS(page)}`;
};

export const FETCH_CATEGORIES = (id: string, page: number) => {
  return BASE_URL + `discover/movie${API_PARAMS(page)}&with_genres=${id}`;
};

export const FETCH_QUERY = (page: number, query: string) => {
  return BASE_URL + `search/movie${API_PARAMS(page)}&query=${query}`;
};

export const FETCH_GENRE = () => {
  return BASE_URL + `genre/movie/list?api_key=${API_KEY}&language=en-US`;
};

export const FETCH_BY_ID = (id: string | string[] | undefined) => {
  return BASE_URL + `movie/${id}${API_PARAMS(1)}`;
};

export const FETCH_RECOMMENDATIONS = (id: string) => {
  return BASE_URL + `movie/${id}/recommendations${API_PARAMS(1)}`;
};

export const FETCH_KEYWORDS = (id: string) => {
  return BASE_URL + `movie/${id}/keywords${API_PARAMS(1)}`;
};
export const FETCH_POPULAR = () => {
  return BASE_URL + `movie/popular${API_PARAMS(1)}`;
};
export const FETCH_TOP_RATED = () => {
  return BASE_URL + `movie/top_rated${API_PARAMS(1)}`;
};
export const FETCH_UPCOMING = () => {
  return BASE_URL + `movie/upcoming${API_PARAMS(1)}`;
};
export const FETCH_LATEST = () => {
  return BASE_URL + `movie/latest${API_PARAMS(1)}`;
};
