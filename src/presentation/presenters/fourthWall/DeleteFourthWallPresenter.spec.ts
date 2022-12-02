import DeleteFourthWall from '@presentation/presenters/fourthWall/DeleteFourthWallPresenter';

let deleteFourthWall: DeleteFourthWall;

describe('DeleteFourthWallPresenter', () => {
  beforeEach(() => {
    deleteFourthWall = new DeleteFourthWall();
  });

  it('should be able to reply data on success', async () => {
    const httpResponse = await deleteFourthWall.reply({
      data: {},
    });

    expect(httpResponse.status_code).toBe(204);
    expect(httpResponse.body).toEqual({ status: 'success' });
  });
});
