import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';

export default interface IController {
  handle(data: IHttpRequest): Promise<IHttpResponse>;
}
