import IValidation from '@presentation/protocols/IValidation';

import ValidationComposite from '@utils/validation/validators/ValidationComposite';

class ValidationSpy implements IValidation {
  private input: any;

  public validate(input: any): void {
    this.input = input;
  }
}

let validationComposite: ValidationComposite;
let validationSpy: ValidationSpy;

describe('ValidationComposite', () => {
  beforeEach(() => {
    validationSpy = new ValidationSpy();

    validationComposite = new ValidationComposite([validationSpy]);
  });

  it('should be able to call validate with correct values', () => {
    const validateSpy = jest.spyOn(validationSpy, 'validate');

    validationComposite.validate({ any_field: 'any_value' });

    expect(validateSpy).toHaveBeenCalledWith({ any_field: 'any_value' });
  });

  it('should be able to throw if validate throws', () => {
    jest.spyOn(validationSpy, 'validate').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      validationComposite.validate({
        any_field: 'any_value',
      });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = validationComposite.validate({
      any_field: 'any_value',
    });

    expect(error).toBeFalsy();
  });
});
