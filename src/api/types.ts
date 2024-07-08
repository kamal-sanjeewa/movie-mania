export enum FetchMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export type InterceptorState = 'FULLFILLED' | 'REJECTED';

export interface Interceptor {
  callback: (value: any) => void;
  type: InterceptorState;
}

export type BodyType = string | number | Blob | Array<number> | boolean | Array<string> | object;
