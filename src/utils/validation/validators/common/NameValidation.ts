import AppError from '@utils/errors/AppError';

import IValidation from '@presentation/protocols/IValidation';

import INameValidator from '@utils/validation/protocols/common/INameValidator';

export default class NameValidation implements IValidation {
  constructor(private readonly fieldName: string, private readonly nameValidator: INameValidator) {}

  public validate(input: any): void {
    const field = input[this.fieldName];

    const isValid = this.nameValidator.isValid(field);

    if (!isValid) throw new AppError({ message: 'Invalid name', status_code: 400 });
  }
}
