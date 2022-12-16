import IValidation from '@presentation/protocols/IValidation';

import HeightValidation from '@utils/validation/validators/common/HeightValidation';
import joiHeightValidatorAdapterFactory from '@main/factories/adapters/validators/common/JoiHeightValidatorAdapterFactory';

const makeHeightValidation = (): IValidation => {
  const fieldHeight = 'height';
  const joiHeightValidatorAdapter =
    joiHeightValidatorAdapterFactory.makeJoiHeightValidatorAdapter();

  const heightValidation = new HeightValidation(fieldHeight, joiHeightValidatorAdapter);

  return heightValidation;
};

export default { makeHeightValidation };
