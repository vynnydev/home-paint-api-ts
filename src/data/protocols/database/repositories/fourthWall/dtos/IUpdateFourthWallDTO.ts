interface IUpdateFourthWall {
  height?: number;
  width?: number;
  door_quantity?: number;
  window_quantity?: number;
}

export default interface IUpdateFourthWallDTO {
  id: string;
  data: IUpdateFourthWall;
}
