import IValidation from '@presentation/protocols/IValidation';

import WindowQuantityValidation from '@utils/validation/validators/common/WindowQuantityValidation';
import joiWindowQuantityValidatorAdapterFactory from '@main/factories/adapters/validators/common/JoiWindowQuantityValidatorAdapterFactory';

const makeWindowQuantityValidation = (): IValidation => {
  const fieldWindowQuantity = 'window_quantity';
  const joiWindowQuantityValidatorAdapter = joiWindowQuantityValidatorAdapterFactory.makeJoiWindowQuantityValidatorAdapter();

  const windowQuantityValidation = new WindowQuantityValidation(fieldWindowQuantity, joiWindowQuantityValidatorAdapter);

  return windowQuantityValidation;
};

export default { makeWindowQuantityValidation };
