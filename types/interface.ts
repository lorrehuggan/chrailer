export interface IMovie {
  overview: string;
  release_date: Date;
  adult: boolean;
  backdrop_path: string;
  vote_count: number;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  vote_average: number;
  video: boolean;
  title: string;
  popularity: number;
  media_type: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMoviePage {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieResults {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
