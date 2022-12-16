import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';

import IDeleteFirstWall from '@domain/useCases/firstWall/IDeleteFirstWall';

export default class DeleteFirstWallController implements IController {
  constructor(
    private readonly deleteFirstWall: IDeleteFirstWall,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    await this.deleteFirstWall.delete(room_id);

    return this.presenter.reply({ data: {} });
  }
}
