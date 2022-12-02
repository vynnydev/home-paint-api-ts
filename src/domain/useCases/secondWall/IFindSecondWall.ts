import SecondWall from '@domain/models/SecondWall';

export default interface IFindSecondWall {
  find(room_id: string): Promise<SecondWall>;
}
