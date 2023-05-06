export interface IQueryParams {
  [key: string]: string | number | Date | unknown;
}

export interface IMessageErrorApi {
  code?: number;
  status?: number;
  message: string;
}
