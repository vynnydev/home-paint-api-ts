import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';
import IValidation from '@presentation/protocols/IValidation';

import IUpdateSecondWall from '@domain/useCases/secondWall/IUpdateSecondWall';

export default class UpdateSecondWallController implements IController {
  constructor(
    private readonly updateSecondWall: IUpdateSecondWall,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params, body }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_id } = params;

    const { height, width, door_quantity, window_quantity } = body;

    const updatedSecondWall = await this.updateSecondWall.update({
      room_id,
      data: {
        height,
        width,
        door_quantity,
        window_quantity,
      },
    });

    return this.presenter.reply({ data: { secondWall: updatedSecondWall } });
  }
}
