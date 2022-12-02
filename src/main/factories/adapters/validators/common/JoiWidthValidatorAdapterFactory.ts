import IWidthValidator from '@utils/validation/protocols/common/IWidthValidator';
import JoiWidthValidatorAdapter from '@infra/adapters/validators/common/joi/WidthValidatorAdapter';

const makeJoiWidthValidatorAdapter = (): IWidthValidator => {
  const joiWidthValidatorAdapter = new JoiWidthValidatorAdapter();

  return joiWidthValidatorAdapter;
};

export default { makeJoiWidthValidatorAdapter };
