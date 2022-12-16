import mockSecondWallModel from '@tests/domain/mocks/MockSecondWallModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeFindSecondWallPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    return {
      status_code: 200,
      body: { status: 'success', secondWall: mockSecondWallModel.mock() },
    };
  }
}
