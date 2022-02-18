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
