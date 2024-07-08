export interface Media {
  id: number;
  backdrop_path: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: 'movie' | 'tv';
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie extends Media {
  media_type: 'movie';
  release_date: string;
}

export interface TVShow extends Media {
  media_type: 'tv';
  first_air_date: string;
}

export type MediaItem = Movie | TVShow;

export interface MovieResponse {
  page: number;
  results: MediaItem[];
  total_pages: number;
  total_results: number;
}
