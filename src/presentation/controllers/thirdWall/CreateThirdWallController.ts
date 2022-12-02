import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';
import IValidation from '@presentation/protocols/IValidation';

import ICreateThirdWall from '@domain/useCases/thirdWall/ICreateThirdWall';

export default class CreateThirdWallController implements IController {
  constructor(
    private readonly createThirdWall: ICreateThirdWall,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ body, params }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_alias_id } = params;
    const { height, width, door_quantity, window_quantity } = body;

    const createdThirdWall = await this.createThirdWall.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_alias_id,
    });

    return this.presenter.reply({ data: { thirdWall: createdThirdWall } });
  }
}
