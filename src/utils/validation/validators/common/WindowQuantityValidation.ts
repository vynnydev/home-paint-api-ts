import AppError from '@utils/errors/AppError';

import IValidation from '@presentation/protocols/IValidation';

import IWindowQuantityValidator from '@utils/validation/protocols/common/IWindowQuantityValidator';

export default class WindowQuantityValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly windowQuantityValidator: IWindowQuantityValidator,
  ) {}

  public validate(input: any): void {
    const field = input[this.fieldName];

    const isValid = this.windowQuantityValidator.isValid(field);

    if (!isValid) throw new AppError({ message: 'Invalid window quantity value', status_code: 400 });
  }
}
