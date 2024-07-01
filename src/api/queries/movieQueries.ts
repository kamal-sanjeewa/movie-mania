import { createQueryBuilder } from 'api/QueryBuilder';
import { FetchMethod } from 'api/types';
import { MovieResponse } from 'models/movie';

const getTrending = (option: 'week' | 'day') => {
  const query = createQueryBuilder<MovieResponse>(
    `${process.env.API_BASE_URL}`,
    `/trending/all/${option}?language=en-US`,
    FetchMethod.Get,
  ).build();

  return query;
};

const getWatchListMovies = (page: number) => {
  const query = createQueryBuilder<MovieResponse>(
    `${process.env.API_BASE_URL}`,
    `/account/21353076/watchlist/movies?language=en-US&page=${page}&sort_by=created_at.asc`,
    FetchMethod.Get,
  ).build();

  return query;
};

export const movieQueries = {
  getTrending,
};
