import { ThunkAction } from '@reduxjs/toolkit';
import { profileQueries } from 'api/queries/profileQueries';
import { ProfileAction } from 'redux/actions/profile';
import { State } from 'redux/reducers';

export function fetchProfileData(
  profileId: string,
): ThunkAction<Promise<void>, State, undefined, ProfileAction> {
  return async dispatch => {
    dispatch(ProfileAction.profileDataLoading(true));
    try {
      const { data } = await profileQueries.getProfile(profileId);
      dispatch(ProfileAction.profileDataFetched(data));
      dispatch(ProfileAction.profileDataLoading(false));
    } catch (e) {
      dispatch(ProfileAction.profileDataLoading(false));
    }
  };
}
