import mockFirstWallModel from '@tests/domain/mocks/MockFirstWallModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeFindFirstWallPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    return { status_code: 200, body: { status: 'success', firstWall: mockFirstWallModel.mock() } };
  }
}
