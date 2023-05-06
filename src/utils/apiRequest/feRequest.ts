import axios, { Method, ResponseType, AxiosResponse } from "axios";
import { IQueryParams } from "@/interfaces/common";

const defaultHeaders = {
  Accept: "applications/json",
  "Content-Ttype": "application/json;charset=UTF-8",
};

export const feRequest = <TRes, TData = IQueryParams>(
  path: string,
  method: Method,
  data?: TData,
  responseType: ResponseType = "json",
  headers?: {}
) => {
  const params = method === "GET" ? data : undefined;
  return axios.request<TRes, AxiosResponse<TRes, TData>, TData>({
    method,
    url: `/api${path}`,
    params,
    data,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    responseType,
  });
};
