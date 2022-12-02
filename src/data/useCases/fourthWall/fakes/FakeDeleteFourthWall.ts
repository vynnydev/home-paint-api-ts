import IDeleteFourthWall from '@domain/useCases/fourthWall/IDeleteFourthWall';

export default class FakeDeleteFourthWall implements IDeleteFourthWall {
  private readonly fourthWall: Array<string> = [];

  public async delete(room_id: string): Promise<void> {
    this.fourthWall.push('deleted');
  }
}
