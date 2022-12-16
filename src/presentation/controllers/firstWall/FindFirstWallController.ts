import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';

import IFindFirstWall from '@domain/useCases/firstWall/IFindFirstWall';

export default class FindFirstWallController implements IController {
  constructor(
    private readonly findFirstWall: IFindFirstWall,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    const foundFirstWall = await this.findFirstWall.find(room_id);

    return this.presenter.reply({ data: { firstWall: foundFirstWall } });
  }
}
