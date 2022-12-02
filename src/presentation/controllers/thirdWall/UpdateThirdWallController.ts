import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IController from '@presentation/protocols/IController';
import IPresenter from '@presentation/protocols/IPresenter';
import IValidation from '@presentation/protocols/IValidation';

import IUpdateThirdWall from '@domain/useCases/thirdWall/IUpdateThirdWall';

export default class UpdateThirdWallController implements IController {
  constructor(
    private readonly updateThirdWall: IUpdateThirdWall,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ params, body }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_id } = params;

    const { height, width, door_quantity, window_quantity } = body;

    const updatedThirdWall = await this.updateThirdWall.update({
      room_id,
      data: {
        height,
        width,
        door_quantity,
        window_quantity,
      },
    });

    return this.presenter.reply({ data: { thirdWall: updatedThirdWall } });
  }
}
