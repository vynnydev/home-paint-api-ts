export interface IHttpResponse {
  status_code: number;
  headers?: any;
  redirect_to?: string;
  body: any;
}

export interface IHttpRequest {
  body?: any;
  headers?: any;
  params?: any;
  query?: any;
  api_gateway?: any;
}
