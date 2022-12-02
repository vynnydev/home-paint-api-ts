export default interface IDeleteSecondWall {
  delete(room_id: string): Promise<void>;
}
