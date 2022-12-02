import IDeleteThirdWall from '@domain/useCases/thirdWall/IDeleteThirdWall';

export default class FakeDeleteThirdWall implements IDeleteThirdWall {
  private readonly employee: Array<string> = [];

  public async delete(room_id: string): Promise<void> {
    this.employee.push('deleted');
  }
}
