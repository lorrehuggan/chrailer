import { BASE_URL, API_KEY } from '.';

export const FETCH_TRENDING = (page: number): string => {
  return BASE_URL + `3/trending/all/day?api_key=${API_KEY}&page=${page}`;
};

export const FETCH_CATEGORIES = (id: string, page: number) => {
  return (
    BASE_URL +
    `3/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=${String(
      page
    )}&with_genres=${id}`
  );
};

export const FETCH_GENRE = () => {
  return BASE_URL + `3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
};
