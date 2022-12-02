import DoorQuantityValidatorAdapter from '@infra/adapters/validators/common/joi/DoorQuantityValidatorAdapter';

let transactionValueValidatorAdapter: DoorQuantityValidatorAdapter;

describe('DoorQuantityValidatorAdapter', () => {
  beforeEach(() => {
    transactionValueValidatorAdapter = new DoorQuantityValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidDoorQuantity = -1;

    const isValid = transactionValueValidatorAdapter.isValid(invalidDoorQuantity);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validDoorQuantity = 1;

    const isValid = transactionValueValidatorAdapter.isValid(validDoorQuantity);

    expect(isValid).toBeTruthy();
  });
});
