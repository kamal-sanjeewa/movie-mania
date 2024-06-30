import {
  ActionFromReducer,
  ThunkDispatch,
  combineReducers,
} from '@reduxjs/toolkit';
import { movie } from './movie';
import { authentication } from './authentication';

export type State = ReturnType<typeof rootReducer>;
export type Action = ActionFromReducer<typeof rootReducer>;
export type RootDispatch = ThunkDispatch<State, undefined, Action>;

export const rootReducer = combineReducers({
  authentication,
  movie,
});
