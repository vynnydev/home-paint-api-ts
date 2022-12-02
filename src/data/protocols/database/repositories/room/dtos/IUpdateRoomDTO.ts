interface IUpdateRoom {
  room_name?: string;
  owner_name?: string;
}

export default interface IUpdateRoomDTO {
  id: string;
  data: IUpdateRoom;
}
