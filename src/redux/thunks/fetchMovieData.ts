import { ThunkAction } from '@reduxjs/toolkit';
import { movieQueries } from 'api/queries/movieQueries';
import { MovieAction } from 'redux/actions/movie';
import { State } from 'redux/reducers';

export function fetchTrendingData(
  option: 'day' | 'week',
): ThunkAction<Promise<void>, State, undefined, MovieAction> {
  return async dispatch => {
    dispatch(MovieAction.movieTrendingDataLoading(true));
    try {
      const { data } = await movieQueries.getTrending(option);
      dispatch(MovieAction.movieTrendingDataFetched(data.results));
      dispatch(MovieAction.movieTrendingDataLoading(false));
    } catch (e) {
      dispatch(MovieAction.movieTrendingDataLoading(false));
    }
  };
}
