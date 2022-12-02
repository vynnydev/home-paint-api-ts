import FakeWidthValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeWidthValidatorAdapter';

import WidthValidation from '@utils/validation/validators/common/WidthValidation';

let doorQuantityValidation: WidthValidation;

let fakeWidthValidatorAdapter: FakeWidthValidatorAdapter;

describe('WidthValidation', () => {
  beforeAll(() => {
    fakeWidthValidatorAdapter = new FakeWidthValidatorAdapter();

    doorQuantityValidation = new WidthValidation('width', fakeWidthValidatorAdapter);
  });

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeWidthValidatorAdapter, 'isValid');

    doorQuantityValidation.validate({ width: 10 });

    expect(isValidSpy).toHaveBeenCalledWith(10);
  });

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeWidthValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      doorQuantityValidation.validate({ width: 10 });
    }).toThrow();
  });

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeWidthValidatorAdapter, 'isValid').mockImplementationOnce(() => false);

    expect(() => {
      doorQuantityValidation.validate({ width: 10 });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = doorQuantityValidation.validate({ width: 10 });

    expect(error).toBeFalsy();
  });
});
