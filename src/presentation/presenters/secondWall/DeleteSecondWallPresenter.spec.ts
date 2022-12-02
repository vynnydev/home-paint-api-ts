import DeleteSecondWall from '@presentation/presenters/secondWall/DeleteSecondWallPresenter';

let deleteSecondWall: DeleteSecondWall;

describe('DeleteSecondWallPresenter', () => {
  beforeEach(() => {
    deleteSecondWall = new DeleteSecondWall();
  });

  it('should be able to reply data on success', async () => {
    const httpResponse = await deleteSecondWall.reply({
      data: {},
    });

    expect(httpResponse.status_code).toBe(204);
    expect(httpResponse.body).toEqual({ status: 'success' });
  });
});
