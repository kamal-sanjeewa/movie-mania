import { createQueryBuilder } from 'api/QueryBuilder';
import { ValidateWithLogin } from 'api/models/authnticationPayload';
import { FetchMethod } from 'api/types';
import { AuthToken } from 'models/authToken';

const getNewAuthToken = () => {
  const query = createQueryBuilder<AuthToken>(
    `${process.env.API_BASE_URL}`,
    '/authentication/token/new',
    FetchMethod.Get,
  ).build();

  return query;
};

const tokenValidateWithLogin = (payload: ValidateWithLogin) => {
  const query = createQueryBuilder<AuthToken>(
    `${process.env.API_BASE_URL}`,
    '/authentication/token/validate_with_login',
    FetchMethod.Post,
  );
  query.setDictBody(payload);
  return query.build();
};

export const authenticationQueries = {
  getNewAuthToken,
  tokenValidateWithLogin,
};
