import Room from '@domain/models/Room';
import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import IFindRooms from '@domain/useCases/room/IFindRooms';

export default class FakeFindRooms implements IFindRooms {
  public async find(): Promise<Room[]> {
    return [mockRoomModel.mock()];
  }
}
