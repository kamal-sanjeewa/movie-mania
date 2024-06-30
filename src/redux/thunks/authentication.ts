import { ThunkAction } from '@reduxjs/toolkit';
import { ValidateWithLogin } from 'api/models/authnticationPayload';
import { authenticationQueries } from 'api/queries/authenticationQueries';
import { AuthenticationAction } from 'redux/actions/authentication';
import { State } from 'redux/reducers';

export function requestNewToken(): ThunkAction<
  Promise<void>,
  State,
  undefined,
  AuthenticationAction
> {
  return async dispatch => {
    dispatch(AuthenticationAction.authTokenLoading(true));
    try {
      const { data } = await authenticationQueries.getNewAuthToken();
      dispatch(AuthenticationAction.authTokenFetch(data));
      dispatch(AuthenticationAction.authTokenLoading(false));
    } catch (e) {
      dispatch(AuthenticationAction.authTokenLoading(false));
    }
  };
}

export function requestTokenWithLogin(
  payload: ValidateWithLogin,
): ThunkAction<Promise<void>, State, undefined, AuthenticationAction> {
  return async dispatch => {
    dispatch(AuthenticationAction.loginTokenDataLoading(true));
    try {
      const { data } = await authenticationQueries.tokenValidateWithLogin(
        payload,
      );
      dispatch(AuthenticationAction.loginTokenDataFetched(data));
      dispatch(AuthenticationAction.loginTokenDataLoading(false));
    } catch (e) {
      dispatch(AuthenticationAction.loginTokenDataLoading(false));
    }
  };
}
