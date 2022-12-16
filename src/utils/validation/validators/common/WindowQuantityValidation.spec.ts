import FakeWindowQuantityValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeWindowQuantityValidatorAdapter';

import WindowQuantityValidation from '@utils/validation/validators/common/WindowQuantityValidation';

let windowQuantityValidation: WindowQuantityValidation;

let fakeWindowQuantityValidatorAdapter: FakeWindowQuantityValidatorAdapter;

describe('WindowQuantityValidation', () => {
  beforeAll(() => {
    fakeWindowQuantityValidatorAdapter = new FakeWindowQuantityValidatorAdapter();

    windowQuantityValidation = new WindowQuantityValidation(
      'window_quantity',
      fakeWindowQuantityValidatorAdapter,
    );
  });

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeWindowQuantityValidatorAdapter, 'isValid');

    windowQuantityValidation.validate({ window_quantity: 1 });

    expect(isValidSpy).toHaveBeenCalledWith(1);
  });

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeWindowQuantityValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      windowQuantityValidation.validate({ window_quantity: 1 });
    }).toThrow();
  });

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeWindowQuantityValidatorAdapter, 'isValid').mockImplementationOnce(() => false);

    expect(() => {
      windowQuantityValidation.validate({ window_quantity: 1 });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = windowQuantityValidation.validate({ window_quantity: 1 });

    expect(error).toBeFalsy();
  });
});
