import FirstWall from '@domain/models/FirstWall';

export default interface IFindFirstWall {
  find(room_id: string): Promise<FirstWall>;
}
