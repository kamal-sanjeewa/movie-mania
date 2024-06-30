import { createQueryBuilder } from 'api/QueryBuilder';
import { FetchMethod } from 'api/types';
import { TrendingMovieResponse } from 'models/movie';

const getTrending = (option: 'week' | 'day') => {
  const query = createQueryBuilder<TrendingMovieResponse>(
    `${process.env.API_BASE_URL}`,
    `/trending/all/${option}?language=en-US`,
    FetchMethod.Get,
  ).build();

  return query;
};

export const movieQueries = {
  getTrending,
};
