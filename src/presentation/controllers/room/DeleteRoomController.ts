import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';

import IDeleteRoom from '@domain/useCases/room/IDeleteRoom';

export default class DeleteRoomController implements IController {
  constructor(private readonly deleteRoom: IDeleteRoom, private readonly presenter: IPresenter) {}

  public async handle({ params }: IHttpRequest): Promise<IHttpResponse> {
    const { room_alias_id } = params;

    await this.deleteRoom.delete(room_alias_id);

    return this.presenter.reply({ data: {} });
  }
}
