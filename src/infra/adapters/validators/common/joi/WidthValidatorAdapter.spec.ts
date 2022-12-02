import WidthValidatorAdapter from '@infra/adapters/validators/common/joi/WidthValidatorAdapter';

let transactionValueValidatorAdapter: WidthValidatorAdapter;

describe('WidthValidatorAdapter', () => {
  beforeEach(() => {
    transactionValueValidatorAdapter = new WidthValidatorAdapter();
  });

  it('should be able to return false if has validation error', () => {
    const invalidWidth = -5.0;

    const isValid = transactionValueValidatorAdapter.isValid(invalidWidth);

    expect(isValid).toBeFalsy();
  });

  it('should be able to return true if do not has validation error', () => {
    const validWidth = 5.0;

    const isValid = transactionValueValidatorAdapter.isValid(validWidth);

    expect(isValid).toBeTruthy();
  });
});
