import { ExecuteQuery } from './ExecuteQuery';
import { BodyType, FetchMethod, InterceptorState } from './types';

type InterceptorCastToNewPayload<TPayload, TResponse> = TResponse extends null
  ? TPayload
  : TResponse;

export const formatObjectToArray = (object: Record<string, any>): [string, any][] => {
  return Object.keys(object).map(key => [key, object[key]]);
};

export const wrapObjectInArray = (object: Record<string, any>): Record<string, any>[] => {
  return [object];
};

export const createQueryBuilder = <TPayload = void>(
  baseUrl: string,
  endpoint: string,
  method: FetchMethod,
) => {
  const headers = new Map<string, string>();
  const queries = new Map<string, string>();
  const body = new Map<string, BodyType>();
  let fullBody: BodyType | null = null;
  let jsonBody: Record<string, unknown>[] = [];

  const requestInterceptors: Record<InterceptorState, (value: any) => void> = {
    FULLFILLED: config => config,
    REJECTED: error => Promise.reject(error),
  };

  const responseInterceptors: Record<InterceptorState, (value: any) => void> = {
    FULLFILLED: response => response,
    REJECTED: error => Promise.reject(error),
  };

  const setDefaultHeaders = () => {
    headers.set('Authorization', `Bearer ${process.env.API_TOKEN}`);
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
  };

  setDefaultHeaders();

  return {
    addHeader: (key: string, value: string) => {
      headers.set(key, value);
      return this;
    },

    addHeaders: (...headersArray: [string, string][]) => {
      headersArray.forEach(([key, value]) => headers.set(key, value));
      return this;
    },

    removeHeaders: (...keys: string[]) => {
      keys.forEach(key => headers.delete(key));
      return this;
    },

    clearHeaders: () => {
      headers.clear();
      return this;
    },

    addQuery: (key: string, value: string) => {
      queries.set(key, value);
      return this;
    },

    addQueries: (...queriesArray: [string, string][]) => {
      queriesArray.forEach(([key, value]) => queries.set(key, value));
      return this;
    },

    removeQueries: (...keys: string[]) => {
      keys.forEach(key => queries.delete(key));
      return this;
    },

    clearQueries: () => {
      queries.clear();
      return this;
    },

    addBodyParam: (key: string, value: BodyType) => {
      body.set(key, value);
      return this;
    },

    addBodyParams: (...params: [string, BodyType][]) => {
      params.forEach(([key, value]) => body.set(key, value));
      return this;
    },

    removeBodyParams: (...keys: string[]) => {
      keys.forEach(key => body.delete(key));
      return this;
    },

    setJsonBody: (jsonBodyArray: Record<string, any>[]) => {
      jsonBody = jsonBodyArray;
      return this;
    },

    setDictBody: (bodyDict: BodyType) => {
      fullBody = bodyDict;
      return this;
    },

    clearBody: () => {
      body.clear();
      return this;
    },

    build: <TResponse = null>() => {
      const constructQueries = () => {
        const queryArray: string[] = [];
        queries.forEach((value, key) => queryArray.push(`${key}=${value}`));
        const joinedQueries = queryArray.join('&');
        return joinedQueries ? `?${joinedQueries}` : '';
      };

      const constructHeaders = () => {
        return Object.fromEntries(headers);
      };

      const constructBody = () => {
        const isObjectData = Array.from(body.values()).every(
          param =>
            typeof param === 'number' ||
            typeof param === 'string' ||
            typeof param === 'boolean' ||
            typeof param === 'object',
        );

        if (isObjectData) {
          headers.set('Content-Type', 'application/json');
          return JSON.stringify(Object.fromEntries(body));
        }

        headers.set('Content-Type', 'multipart/form-data');

        const formData = new FormData();
        body.forEach((value, key) => formData.append(key, value));
        return formData;
      };

      const url = `${baseUrl}${endpoint}${constructQueries()}`;
      const requestBody =
        fullBody !== null
          ? JSON.stringify(fullBody)
          : jsonBody.length
          ? JSON.stringify(jsonBody)
          : constructBody();
      const requestHeaders = constructHeaders();

      return ExecuteQuery<InterceptorCastToNewPayload<TPayload, TResponse>>({
        url,
        body: requestBody,
        headers: requestHeaders,
        method,
        requestInterceptors,
        responseInterceptors,
      });
    },
  };
};
