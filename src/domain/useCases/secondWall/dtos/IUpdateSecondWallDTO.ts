interface IUpdateSecondWall {
  height?: number,
  width?: number,
  door_quantity?: number,
  window_quantity?: number,
}

export default interface IUpdateSecondWallDTO {
  room_id: string;
  data: IUpdateSecondWall;
}
