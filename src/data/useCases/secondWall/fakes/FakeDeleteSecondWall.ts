import IDeleteSecondWall from '@domain/useCases/secondWall/IDeleteSecondWall';

export default class FakeDeleteSecondWall implements IDeleteSecondWall {
  private readonly employee: Array<string> = [];

  public async delete(room_id: string): Promise<void> {
    this.employee.push('deleted');
  }
}
