import ThirdWall from '@domain/models/ThirdWall';

export default interface IFindThirdWall {
  find(room_id: string): Promise<ThirdWall>;
}
