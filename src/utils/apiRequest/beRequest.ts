import axios, { Method, ResponseType, AxiosResponse } from "axios";
import { IQueryParams } from "@/interfaces/common";

const defaultHeaders = {
  Accept: "applications/json",
  "Content-Ttype": "application/json;charset=UTF-8",
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const beRequest = <TRes, TData = IQueryParams>(
  path: string,
  method: Method,
  data?: TData,
  headers?: Record<string, unknown>,
  responseType: ResponseType = "json"
) => {
  const params = method === "GET" ? data : undefined;
  return axios.request<TRes, AxiosResponse<TRes, TData>, TData>({
    method,
    url: path,
    params,
    data: method === "GET" ? undefined : data,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    responseType,
  });
};
