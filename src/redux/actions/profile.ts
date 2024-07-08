import { UserProfile } from 'models/profile';
import { AllActionsOf, createBooleanAction, createTypedAction } from 'utils/createActionsUtils';

export enum ProfileActionType {
  PROFILE_DATA = '@profile/PROFILE_DATA',
  PROFILE_DATA_LOADING = '@profile/PROFILE_DATA_LOADING',
}

export const ProfileAction = {
  profileDataFetched: createTypedAction<UserProfile | undefined>()(ProfileActionType.PROFILE_DATA),
  profileDataLoading: createBooleanAction(ProfileActionType.PROFILE_DATA_LOADING),
};

export type ProfileAction = AllActionsOf<typeof ProfileAction>;
