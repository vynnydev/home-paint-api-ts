import { IHttpRequest, IHttpResponse } from '@presentation/protocols/IHttp';
import IPresenter from '@presentation/protocols/IPresenter';
import IController from '@presentation/protocols/IController';
import IValidation from '@presentation/protocols/IValidation';

import ICreateFourthWall from '@domain/useCases/fourthWall/ICreateFourthWall';

export default class CreateFourthWallController implements IController {
  constructor(
    private readonly createFourthWall: ICreateFourthWall,
    private readonly validation: IValidation,
    private readonly presenter: IPresenter,
  ) {}

  public async handle({ body, params }: IHttpRequest): Promise<IHttpResponse> {
    this.validation.validate(body);

    const { room_alias_id } = params;
    const { height, width, door_quantity, window_quantity } = body;

    const createdFourthWall = await this.createFourthWall.create({
      height,
      width,
      door_quantity,
      window_quantity,
      room_alias_id,
    });

    return this.presenter.reply({ data: { fourthWall: createdFourthWall } });
  }
}
