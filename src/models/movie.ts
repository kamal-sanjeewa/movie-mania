export interface Movie {
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
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TrendingMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}