import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';

import IDeleteSecondWall from '@domain/useCases/secondWall/IDeleteSecondWall';

export default class DeleteSecondWallController implements IController {
  constructor(
    private readonly deleteSecondWall: IDeleteSecondWall,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    await this.deleteSecondWall.delete(room_id);

    return this.presenter.reply({ data: {} });
  }
}
