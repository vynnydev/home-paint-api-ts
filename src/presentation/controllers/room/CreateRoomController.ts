import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';
import IValidation from '@presentation/protocols/IValidation';

import ICreateRoom from '@domain/useCases/room/ICreateRoom';

export default class CreateRoomController implements IController {
  constructor(
    private readonly createRoom: ICreateRoom,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ body }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_name, owner_name } = body;

    const createdRoom = await this.createRoom.create({
      room_name,
      owner_name,
    });

    return this.presenter.reply({ data: { room: createdRoom } });
  }
}
