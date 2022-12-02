import mockRoomModel from '@tests/domain/mocks/MockRoomModel';

import { IHttpResponse } from '@presentation/protocols/IHttp';
import IReplyDTO from '@presentation/protocols/dtos/IReplyDTO';
import IPresenter from '@presentation/protocols/IPresenter';

export default class FakeUpdateRoomPresenter implements IPresenter {
  public async reply({ data }: IReplyDTO): Promise<IHttpResponse> {
    const room = mockRoomModel.mock();

    return {
      status_code: 200,
      body: { status: 'success', room },
    };
  }
}
