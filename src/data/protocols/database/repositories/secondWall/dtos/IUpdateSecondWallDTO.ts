interface IUpdateSecondWall {
  height?: number;
  width?: number;
  door_quantity?: number;
  window_quantity?: number;
}

export default interface IUpdateSecondWallDTO {
  id: string;
  data: IUpdateSecondWall;
}
