interface IUpdateFirstWall {
  height?: number;
  width?: number;
  door_quantity?: number;
  window_quantity?: number;
}

export default interface IUpdateFirstWallDTO {
  id: string;
  data: IUpdateFirstWall;
}
