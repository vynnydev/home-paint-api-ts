import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';

import IDeleteThirdWall from '@domain/useCases/thirdWall/IDeleteThirdWall';

export default class DeleteThirdWallController implements IController {
  constructor(private readonly deleteThirdWall: IDeleteThirdWall, private readonly presenter: IPresenter) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_id } = params;

    await this.deleteThirdWall.delete(room_id);

    return this.presenter.reply({ data: {} });
  }
}
