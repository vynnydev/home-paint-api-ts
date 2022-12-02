import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';
import IValidation from '@presentation/protocols/IValidation';

import ICreateSecondWall from '@domain/useCases/secondWall/ICreateSecondWall';

export default class CreateSecondWallController implements IController {
  constructor(
    private readonly createSecondWall: ICreateSecondWall,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ body, params }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_alias_id } = params;
    const { height, width, door_quantity, window_quantity } = body;

    const createdSecondWall = await this.createSecondWall.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_alias_id,
    });

    return this.presenter.reply({ data: { secondWall: createdSecondWall } });
  }
}
