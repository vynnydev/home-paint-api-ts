import DeleteFirstWall from '@presentation/presenters/firstWall/DeleteFirstWallPresenter';

let deleteFirstWall: DeleteFirstWall;

describe('DeleteFirstWallPresenter', () => {
  beforeEach(() => {
    deleteFirstWall = new DeleteFirstWall();
  });

  it('should be able to reply data on success', async () => {
    const httpResponse = await deleteFirstWall.reply({
      data: {},
    });

    expect(httpResponse.status_code).toBe(204);
    expect(httpResponse.body).toEqual({ status: 'success' });
  });
});
