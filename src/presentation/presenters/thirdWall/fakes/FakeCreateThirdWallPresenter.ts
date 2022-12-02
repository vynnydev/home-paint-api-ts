import mockThirdWallModel from '@tests/domain/mocks/MockThirdWallModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeCreateThirdWallPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const thirdWall = mockThirdWallModel.mock();

    return {
      status_code: 201,
      body: { status: 'success', thirdWall },
    };
  }
}
