import { MediaItem } from 'models/movie';
import { MovieAction, MovieActionType } from 'redux/actions/movie';
import { createWithDefault } from './createWithDefault';

export interface PopularState {
  list: Array<MediaItem>;
  listLoading: boolean;
}

export const popularInitialState: PopularState = {
  list: [],
  listLoading: false,
};

export function movieReducer(state: PopularState, action: MovieAction): PopularState {
  switch (action.type) {
    case MovieActionType.MOVIE_TRENDING_DATA:
      return {
        ...state,
        list: action.payload,
      };

    case MovieActionType.MOVIE_TRENDING_DATA_LOADING:
      return {
        ...state,
        listLoading: action.payload,
      };
    default:
      return state;
  }
}

export const movie = createWithDefault(movieReducer, popularInitialState);
