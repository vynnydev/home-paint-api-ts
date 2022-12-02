import mockFourthWallModel from '@tests/domain/mocks/MockFourthWallModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeCreateFourthWallPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const fourthWall = mockFourthWallModel.mock();

    return {
      status_code: 201,
      body: { status: 'success', fourthWall },
    };
  }
}
