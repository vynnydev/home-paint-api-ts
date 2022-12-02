import Room from '@domain/models/Room';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import ICreateRoomDTO from '@domain/useCases/room/dtos/ICreateRoomDTO';
import ICreateRoom from '@domain/useCases/room/ICreateRoom';

export default class FakeCreateRoom implements ICreateRoom {
  public async create(data: ICreateRoomDTO): Promise<Room> {
    const room = mockRoomModel.mock();

    return room;
  }
}
