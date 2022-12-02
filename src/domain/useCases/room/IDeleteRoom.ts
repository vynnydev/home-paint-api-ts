export default interface IDeleteRoom {
  delete(room_alias_id: string): Promise<void>;
}
