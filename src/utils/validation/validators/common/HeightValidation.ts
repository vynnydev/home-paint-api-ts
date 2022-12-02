import AppError from '@utils/errors/AppError';

import IValidation from '@presentation/protocols/IValidation';

import IHeightValidator from '@utils/validation/protocols/common/IHeightValidator';

export default class HeightValidation implements IValidation {
  constructor(
    private readonly fieldName: string,
    private readonly heightValidator: IHeightValidator,
  ) {}

  public validate(input: any): void {
    const field = input[this.fieldName];

    const isValid = this.heightValidator.isValid(field);

    if (!isValid) throw new AppError({ message: 'Invalid height value', status_code: 400 });
  }
}
