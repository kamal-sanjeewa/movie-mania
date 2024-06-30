import { AuthToken } from 'models/authToken';
import {
  AllActionsOf,
  createBooleanAction,
  createTypedAction,
} from 'utils/createActionsUtils';

export enum AuthenticationActionType {
  AUTHENTICATION_DATA = '@movie/MOVIE_TRENDING_DATA',
  AUTHENTICATION_DATA_LOADING = '@movie/MOVIE_TRENDING_DATA_LOADING',
  LOGIN_TOKEN_DATA = '@movie/LOGIN_TOKEN_DATA',
  LOGIN_TOKEN_DATA_LOADING = '@movie/LOGIN_TOKEN_DATA_LOADING',
}

export const AuthenticationAction = {
  authTokenFetch: createTypedAction<AuthToken>()(
    AuthenticationActionType.AUTHENTICATION_DATA,
  ),
  authTokenLoading: createBooleanAction(
    AuthenticationActionType.AUTHENTICATION_DATA_LOADING,
  ),
  loginTokenDataFetched: createTypedAction<AuthToken>()(
    AuthenticationActionType.LOGIN_TOKEN_DATA,
  ),
  loginTokenDataLoading: createBooleanAction(
    AuthenticationActionType.LOGIN_TOKEN_DATA_LOADING,
  ),
};

export type AuthenticationAction = AllActionsOf<typeof AuthenticationAction>;
