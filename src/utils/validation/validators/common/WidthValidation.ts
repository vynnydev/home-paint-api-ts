import AppError from '@utils/errors/AppError';

import IValidation from '@presentation/protocols/IValidation';

import IWidthValidator from '@utils/validation/protocols/common/IWidthValidator';

export default class WidthValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly widthValidator: IWidthValidator,
  ) {}

  public validate(input: any): void {
    const field = input[this.fieldName];

    const isValid = this.widthValidator.isValid(field);

    if (!isValid) throw new AppError({ message: 'Invalid width value', status_code: 400 });
  }
}
