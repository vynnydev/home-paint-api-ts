import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';

import IFindSecondWall from '@domain/useCases/secondWall/IFindSecondWall';

export default class FindSecondWallController implements IController {
  constructor(
    private readonly findSecondWall: IFindSecondWall,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    const foundSecondWall = await this.findSecondWall.find(room_id);

    return this.presenter.reply({ data: { secondWall: foundSecondWall } });
  }
}
