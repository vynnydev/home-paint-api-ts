export default interface IDeleteThirdWall {
  delete(room_id: string): Promise<void>;
}
