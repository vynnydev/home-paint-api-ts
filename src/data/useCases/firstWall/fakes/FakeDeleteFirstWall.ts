import IDeleteFirstWall from '@domain/useCases/firstWall/IDeleteFirstWall';

export default class FakeDeleteFirstWall implements IDeleteFirstWall {
  private readonly employee: Array<string> = [];

  public async delete(room_id: string): Promise<void> {
    this.employee.push('deleted');
  }
}
