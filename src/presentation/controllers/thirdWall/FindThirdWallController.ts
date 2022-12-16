import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';

import IFindThirdWall from '@domain/useCases/thirdWall/IFindThirdWall';

export default class FindThirdWallController implements IController {
  constructor(
    private readonly findThirdWall: IFindThirdWall,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    const foundThirdWall = await this.findThirdWall.find(room_id);

    return this.presenter.reply({ data: { thirdWall: foundThirdWall } });
  }
}
