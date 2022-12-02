import FourthWall from '@domain/models/FourthWall';

export default interface IFindFourthWall {
  find(room_id: string): Promise<FourthWall>;
}
