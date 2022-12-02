import Room from '@domain/models/Room';

export default interface IFindRooms {
  find(): Promise<Room[]>;
}
