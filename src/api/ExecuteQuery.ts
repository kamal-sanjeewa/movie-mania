import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { BodyType, FetchMethod, InterceptorState } from './types';

type RequestBody = Record<string, BodyType> | FormData | string;

interface ExecuteQueryConfig {
  url: string;
  body: RequestBody;
  headers: Record<string, string>;
  method: FetchMethod;
  requestInterceptors: Record<InterceptorState, (value: any) => void>;
  responseInterceptors: Record<InterceptorState, (value: any) => void>;
}

const createAxiosInstance = (config: ExecuteQueryConfig): AxiosInstance => {
  const instance = axios.create();

  instance.interceptors.request.use(
    config.requestInterceptors.FULLFILLED as (
      value: InternalAxiosRequestConfig<any>,
    ) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>,
    config.requestInterceptors.REJECTED,
  );

  instance.interceptors.response.use(
    config.responseInterceptors.FULLFILLED as (
      value: AxiosResponse<any, any>,
    ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>,
    config.responseInterceptors.REJECTED,
  );

  return instance;
};

const executeRequest = async <TPayload>(
  config: ExecuteQueryConfig,
  axiosInstance: AxiosInstance,
): Promise<AxiosResponse<TPayload>> => {
  const { url, body, headers, method } = config;

  switch (method) {
    case FetchMethod.Get:
      return axiosInstance.get<TPayload>(url, { headers });
    case FetchMethod.Post:
      return axiosInstance.post<TPayload>(url, body, { headers });
    case FetchMethod.Put:
      return axiosInstance.put<TPayload>(url, body, { headers });
    case FetchMethod.Patch:
      return axiosInstance.patch<TPayload>(url, body, { headers });
    case FetchMethod.Delete:
      return axiosInstance.delete<TPayload>(url, { headers });
    default:
      throw new Error(`Unsupported fetch method: ${method}`);
  }
};

export const ExecuteQuery = async <TPayload>(
  config: ExecuteQueryConfig,
): Promise<AxiosResponse<TPayload>> => {
  const axiosInstance = createAxiosInstance(config);
  return executeRequest<TPayload>(config, axiosInstance);
};
