interface IUpdateRoom {
  room_name: string;
  owner_name: string;
}

export default interface IUpdateRoomDTO {
  room_alias_id: string;
  data: IUpdateRoom;
}
