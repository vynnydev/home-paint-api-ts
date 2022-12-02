import Room from '@domain/models/Room';

import ICreateRoomDTO from '@domain/useCases/room/dtos/ICreateRoomDTO';

export default interface ICreateRoom {
  create(data: ICreateRoomDTO): Promise<Room>;
}
