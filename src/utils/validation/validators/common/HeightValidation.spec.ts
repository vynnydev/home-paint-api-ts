import FakeHeightValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeHeightValidatorAdapter';

import HeightValidation from '@utils/validation/validators/common/HeightValidation';

let heightValidation: HeightValidation;

let fakeHeightValidatorAdapter: FakeHeightValidatorAdapter;

describe('HeightValidation', () => {
  beforeAll(() => {
    fakeHeightValidatorAdapter = new FakeHeightValidatorAdapter();

    heightValidation = new HeightValidation('height', fakeHeightValidatorAdapter);
  });

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeHeightValidatorAdapter, 'isValid');

    heightValidation.validate({ height: 3 });

    expect(isValidSpy).toHaveBeenCalledWith(3);
  });

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeHeightValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      heightValidation.validate({ height: 3 });
    }).toThrow();
  });

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeHeightValidatorAdapter, 'isValid').mockImplementationOnce(() => false);

    expect(() => {
      heightValidation.validate({ height: 3 });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = heightValidation.validate({ height: 3 });

    expect(error).toBeFalsy();
  });
});
