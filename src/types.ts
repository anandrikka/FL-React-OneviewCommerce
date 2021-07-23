export type KeyValuePair = {
  [key: string]: any
}

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT"
}

export interface ErrorDetails {
  errorCode?: number,
  errorMessage: string
}