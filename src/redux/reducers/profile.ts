import { createWithDefault } from './createWithDefault';
import { AuthenticationActionType, UnsetTokenAction } from 'redux/actions/authentication';
import { ProfileAction, ProfileActionType } from 'redux/actions/profile';
import { UserProfile } from 'models/profile';

export interface UserProfileState {
  data?: UserProfile;
  dataLoading: boolean;
}

export const profileInitialState: UserProfileState = {
  dataLoading: false,
};

export function profileReducer(
  state: UserProfileState,
  action: ProfileAction | UnsetTokenAction,
): UserProfileState {
  switch (action.type) {
    case AuthenticationActionType.UNSET_TOKEN:
      return {
        ...profileInitialState,
      };

    case ProfileActionType.PROFILE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case ProfileActionType.PROFILE_DATA_LOADING:
      return {
        ...state,
        dataLoading: action.payload,
      };
    default:
      return state;
  }
}

export const profile = createWithDefault(profileReducer, profileInitialState);
