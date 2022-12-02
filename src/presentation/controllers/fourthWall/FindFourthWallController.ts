import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';

import IFindFourthWall from '@domain/useCases/fourthWall/IFindFourthWall';

export default class FindFourthWallController implements IController {
  constructor(private readonly findFourthWall: IFindFourthWall, private readonly presenter: IPresenter) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    const foundFourthWall = await this.findFourthWall.find(room_id);

    return this.presenter.reply({ data: { fourthWall: foundFourthWall } });
  }
}
