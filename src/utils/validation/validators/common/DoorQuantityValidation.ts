import AppError from '@utils/errors/AppError';

import IValidation from '@presentation/protocols/IValidation';

import IDoorQuantityValidator from '@utils/validation/protocols/common/IDoorQuantityValidator';

export default class DoorQuantityValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly doorQuantityValidator: IDoorQuantityValidator,
  ) {}

  public validate(input: any): void {
    const field = input[this.fieldName];

    const isValid = this.doorQuantityValidator.isValid(field);

    if (!isValid) throw new AppError({ message: 'Invalid door quantity value', status_code: 400 });
  }
}
