import { createAction } from '@reduxjs/toolkit';
import { AuthToken } from 'models/authToken';
import { AllActionsOf, createBooleanAction, createTypedAction } from 'utils/createActionsUtils';

export enum AuthenticationActionType {
  UNSET_TOKEN = '@auth/UNSET_TOKEN',
  AUTHENTICATION_DATA = '@auth/AUTHENTICATION_DATA',
  AUTHENTICATION_DATA_LOADING = '@auth/AUTHENTICATION_DATA_LOADING',
  LOGIN_TOKEN_DATA = '@auth/LOGIN_TOKEN_DATA',
  LOGIN_TOKEN_DATA_LOADING = '@auth/LOGIN_TOKEN_DATA_LOADING',
}

export const AuthenticationAction = {
  authTokenFetch: createTypedAction<AuthToken>()(AuthenticationActionType.AUTHENTICATION_DATA),
  authTokenLoading: createBooleanAction(AuthenticationActionType.AUTHENTICATION_DATA_LOADING),
  loginTokenDataFetched: createTypedAction<AuthToken>()(AuthenticationActionType.LOGIN_TOKEN_DATA),
  loginTokenDataLoading: createBooleanAction(AuthenticationActionType.LOGIN_TOKEN_DATA_LOADING),
  unsetToken: createAction(AuthenticationActionType.UNSET_TOKEN),
};

export type AuthenticationAction = AllActionsOf<typeof AuthenticationAction>;
export type UnsetTokenAction = ReturnType<typeof AuthenticationAction.unsetToken>;
