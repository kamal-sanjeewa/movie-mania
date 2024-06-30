import { createWithDefault } from './createWithDefault';
import { AuthToken } from 'models/authToken';
import {
  AuthenticationAction,
  AuthenticationActionType,
} from 'redux/actions/authentication';

export interface PopularState {
  tokenData?: AuthToken;
  tokenLoading: boolean;
  loginTokenData?: AuthToken;
  loginTokenDataLoading: boolean;
}

export const popularInitialState: PopularState = {
  tokenData: undefined,
  loginTokenData: undefined,
  tokenLoading: false,
  loginTokenDataLoading: false,
};

export function authenticationReducer(
  state: PopularState,
  action: AuthenticationAction,
): PopularState {
  switch (action.type) {
    case AuthenticationActionType.AUTHENTICATION_DATA:
      return {
        ...state,
        tokenData: action.payload,
      };

    case AuthenticationActionType.AUTHENTICATION_DATA_LOADING:
      return {
        ...state,
        tokenLoading: action.payload,
      };

    case AuthenticationActionType.LOGIN_TOKEN_DATA:
      return {
        ...state,
        loginTokenData: action.payload,
      };

    case AuthenticationActionType.LOGIN_TOKEN_DATA_LOADING:
      return {
        ...state,
        loginTokenDataLoading: action.payload,
      };

    default:
      return state;
  }
}

export const authentication = createWithDefault(
  authenticationReducer,
  popularInitialState,
);
