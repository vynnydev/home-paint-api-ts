import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeCreateSecondWallPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const secondWall = mockSecondWallModel.mock();

    return {
      status_code: 201,
      body: { status: 'success', secondWall },
    };
  }
}
