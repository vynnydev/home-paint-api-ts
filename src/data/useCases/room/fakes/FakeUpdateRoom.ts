import Room from '@domain/models/Room';

import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import IUpdateRoom from '@domain/useCases/room/IUpdateRoom';
import IUpdateRoomDTO from '@domain/useCases/room/dtos/IUpdateRoomDTO';

export default class FakeUpdateRoom implements IUpdateRoom {
  public async update(data: IUpdateRoomDTO): Promise<Room> {
    const room = mockRoomModel.mock();

    return room;
  }
}
