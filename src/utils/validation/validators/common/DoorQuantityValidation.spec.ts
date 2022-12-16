import FakeDoorQuantityValidatorAdapter from '@infra/adapters/validators/common/fakes/FakeDoorQuantityValidatorAdapter';

import DoorQuantityValidation from '@utils/validation/validators/common/DoorQuantityValidation';

let doorQuantityValidation: DoorQuantityValidation;

let fakeDoorQuantityValidatorAdapter: FakeDoorQuantityValidatorAdapter;

describe('DoorQuantityValidation', () => {
  beforeAll(() => {
    fakeDoorQuantityValidatorAdapter = new FakeDoorQuantityValidatorAdapter();

    doorQuantityValidation = new DoorQuantityValidation(
      'door_quantity',
      fakeDoorQuantityValidatorAdapter,
    );
  });

  it('should be able to call is valid with correct values', () => {
    const isValidSpy = jest.spyOn(fakeDoorQuantityValidatorAdapter, 'isValid');

    doorQuantityValidation.validate({ door_quantity: 1 });

    expect(isValidSpy).toHaveBeenCalledWith(1);
  });

  it('should be able to throw if is valid throws', () => {
    jest.spyOn(fakeDoorQuantityValidatorAdapter, 'isValid').mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      doorQuantityValidation.validate({ door_quantity: 1 });
    }).toThrow();
  });

  it('should be able to throw if is valid returns false', () => {
    jest.spyOn(fakeDoorQuantityValidatorAdapter, 'isValid').mockImplementationOnce(() => false);

    expect(() => {
      doorQuantityValidation.validate({ door_quantity: 1 });
    }).toThrow();
  });

  it('should be able to validate', () => {
    const error = doorQuantityValidation.validate({ door_quantity: 1 });

    expect(error).toBeFalsy();
  });
});
