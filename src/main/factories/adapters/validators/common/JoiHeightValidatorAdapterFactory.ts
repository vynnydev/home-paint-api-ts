import IHeightValidator from '@utils/validation/protocols/common/IHeightValidator';
import JoiHeightValidatorAdapter from '@infra/adapters/validators/common/joi/HeightValidatorAdapter';

const makeJoiHeightValidatorAdapter = (): IHeightValidator => {
  const joiHeightValidatorAdapter = new JoiHeightValidatorAdapter();

  return joiHeightValidatorAdapter;
};

export default { makeJoiHeightValidatorAdapter };
