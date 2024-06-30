import { Movie } from 'models/movie';
import {
  AllActionsOf,
  createBooleanAction,
  createTypedAction,
} from 'utils/createActionsUtils';

export enum MovieActionType {
  MOVIE_TRENDING_DATA = '@movie/MOVIE_TRENDING_DATA',
  MOVIE_TRENDING_DATA_LOADING = '@movie/MOVIE_TRENDING_DATA_LOADING',
}

export const MovieAction = {
  movieTrendingDataFetched: createTypedAction<Movie[]>()(
    MovieActionType.MOVIE_TRENDING_DATA,
  ),
  movieTrendingDataLoading: createBooleanAction(
    MovieActionType.MOVIE_TRENDING_DATA_LOADING,
  ),
};

export type MovieAction = AllActionsOf<typeof MovieAction>;
