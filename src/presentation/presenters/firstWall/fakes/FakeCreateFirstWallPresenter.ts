import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeCreateFirstWallPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const firstWall = mockFirstWallModel.mock();

    return {
      status_code: 201,
      body: { status: 'success', firstWall },
    };
  }
}
