import IDeleteRoom from '@domain/useCases/room/IDeleteRoom';

export default class FakeDeleteRoom implements IDeleteRoom {
  private readonly room: Array<string> = [];

  public async delete(room_alias_id: string): Promise<void> {
    this.room.push('deleted');
  }
}
