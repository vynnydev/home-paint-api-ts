import DeleteThirdWall from '@presentation/presenters/thirdWall/DeleteThirdWallPresenter';

let deleteThirdWall: DeleteThirdWall;

describe('DeleteThirdWallPresenter', () => {
  beforeEach(() => {
    deleteThirdWall = new DeleteThirdWall();
  });

  it('should be able to reply data on success', async () => {
    const httpResponse = await deleteThirdWall.reply({
      data: {},
    });

    expect(httpResponse.status_code).toBe(204);
    expect(httpResponse.body).toEqual({ status: 'success' });
  });
});
