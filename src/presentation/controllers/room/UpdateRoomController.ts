import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';
import IValidation from '@presentation/protocols/IValidation';

import IUpdateRoom from '@domain/useCases/room/IUpdateRoom';

export default class UpdateRoomController implements IController {
  constructor(
    private readonly updateRoom: IUpdateRoom,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params, body }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_alias_id } = params;

    const { room_name, owner_name } = body;

    const updatedRoom = await this.updateRoom.update({
      room_alias_id,
      data: {
        room_name,
        owner_name,
      },
    });

    return this.presenter.reply({ data: { room: updatedRoom } });
  }
}
