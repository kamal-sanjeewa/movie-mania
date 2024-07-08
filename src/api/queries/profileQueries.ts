import { createQueryBuilder } from 'api/QueryBuilder';
import { FetchMethod } from 'api/types';
import { UserProfile } from 'models/profile';

const getProfile = (profileId: string) => {
  const query = createQueryBuilder<UserProfile>(
    `${process.env.API_BASE_URL}`,
    `/account/${profileId}`,
    FetchMethod.Get,
  ).build();

  return query;
};

export const profileQueries = {
  getProfile,
};
