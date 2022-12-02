import IValidation from '@presentation/protocols/IValidation';

import WidthValidation from '@utils/validation/validators/common/WidthValidation';
import joiWidthValidatorAdapterFactory from '@main/factories/adapters/validators/common/JoiWidthValidatorAdapterFactory';

const makeWidthValidation = (): IValidation => {
  const fieldWidth = 'width';
  const joiWidthValidatorAdapter = joiWidthValidatorAdapterFactory.makeJoiWidthValidatorAdapter();

  const widthValidation = new WidthValidation(fieldWidth, joiWidthValidatorAdapter);

  return widthValidation;
};

export default { makeWidthValidation };
