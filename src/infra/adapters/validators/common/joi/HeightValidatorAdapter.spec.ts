import HeightValidatorAdapter from '@infra/adapters/validators/common/joi/HeightValidatorAdapter';

let transactionValueValidatorAdapter: HeightValidatorAdapter;

describe('HeightValidatorAdapter', () => {
  beforeEach(() => {
    transactionValueValidatorAdapter = new HeightValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidHeight = -2.2;

    const isValid = transactionValueValidatorAdapter.isValid(invalidHeight);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validHeight = 2.2;

    const isValid = transactionValueValidatorAdapter.isValid(validHeight);

    expect(isValid).toBeTruthy();
  });
});
