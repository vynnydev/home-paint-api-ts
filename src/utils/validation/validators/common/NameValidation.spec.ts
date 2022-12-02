import FakeNameValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeNameValidatorAdapter';

import NameValidation from '@utils/validation/validators/common/NameValidation';

let nameValidation: NameValidation;

let fakeNameValidatorAdapter: FakeNameValidatorAdapter;

describe('NameValidation', () => {
  beforeAll(() => {
    fakeNameValidatorAdapter = new FakeNameValidatorAdapter();

    nameValidation = new NameValidation('name', fakeNameValidatorAdapter);
  });

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeNameValidatorAdapter, 'isValid');

    nameValidation.validate({ name: 'any_name' });

    expect(isValidSpy).toHaveBeenCalledWith('any_name');
  });

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeNameValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      nameValidation.validate({ name: 'any_name' });
    }).toThrow();
  });

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeNameValidatorAdapter, 'isValid').mockImplementationOnce(() => false);

    expect(() => {
      nameValidation.validate({ name: 'any_name' });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = nameValidation.validate({ name: 'any_name' });

    expect(error).toBeFalsy();
  });
});
