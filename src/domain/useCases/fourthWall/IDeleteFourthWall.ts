export default interface IDeleteFourthWall {
  delete(room_id: string): Promise<void>;
}
