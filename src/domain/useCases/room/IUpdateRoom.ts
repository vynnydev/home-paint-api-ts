import Room from '@domain/models/Room';

import IUpdateRoomDTO from '@domain/useCases/room/dtos/IUpdateRoomDTO';

export default interface IUpdateRoom {
  update(data: IUpdateRoomDTO): Promise<Room>;
}
