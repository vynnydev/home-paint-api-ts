import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';

import IDeleteFourthWall from '@domain/useCases/fourthWall/IDeleteFourthWall';

export default class DeleteFourthWallController implements IController {
  constructor(private readonly deleteFourthWall: IDeleteFourthWall, private readonly presenter: IPresenter) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    await this.deleteFourthWall.delete(room_id);

    return this.presenter.reply({ data: {} });
  }
}
