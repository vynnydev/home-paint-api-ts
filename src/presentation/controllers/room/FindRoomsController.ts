import { IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';

import IFindRooms from '@domain/useCases/room/IFindRooms';

export default class FindRoomsController implements IController {
  constructor(
    private readonly findRooms: IFindRooms,
    private readonly presenter: IPresenter,
  ) {}

  public async handle(): Promise<IHttpResponse> {
    const foundRooms = await this.findRooms.find();

    return this.presenter.reply({ data: { rooms: foundRooms } });
  }
}
