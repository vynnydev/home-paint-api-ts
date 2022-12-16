interface IUpdateThirdWall {
  height?: number;
  width?: number;
  door_quantity?: number;
  window_quantity?: number;
}

export default interface IUpdateThirdWallDTO {
  room_id: string;
  data: IUpdateThirdWall;
}
