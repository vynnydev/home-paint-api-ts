import IWindowQuantityValidator from '@utils/validation/protocols/common/IWindowQuantityValidator';
import JoiWindowQuantityValidatorAdapter from '@infra/adapters/validators/common/joi/WindowQuantityValidatorAdapter';

const makeJoiWindowQuantityValidatorAdapter = (): IWindowQuantityValidator => {
  const joiWindowQuantityValidatorAdapter = new JoiWindowQuantityValidatorAdapter();

  return joiWindowQuantityValidatorAdapter;
};

export default { makeJoiWindowQuantityValidatorAdapter };
