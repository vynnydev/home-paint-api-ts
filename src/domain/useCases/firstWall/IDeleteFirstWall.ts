export default interface IDeleteFirstWall {
  delete(room_id: string): Promise<void>;
}
