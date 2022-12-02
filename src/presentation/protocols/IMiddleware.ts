import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';

export default interface IMiddleware {
  handle(data: IHttpRequest): Promise<IHttpResponse>;
}
