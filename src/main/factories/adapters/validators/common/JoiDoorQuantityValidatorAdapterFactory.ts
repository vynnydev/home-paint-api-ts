import IDoorQuantityValidator from '@utils/validation/protocols/common/IDoorQuantityValidator';
import JoiDoorQuantityValidatorAdapter from '@infra/adapters/validators/common/joi/DoorQuantityValidatorAdapter';

const makeJoiDoorQuantityValidatorAdapter = (): IDoorQuantityValidator => {
  const joiDoorQuantityValidatorAdapter = new JoiDoorQuantityValidatorAdapter();

  return joiDoorQuantityValidatorAdapter;
};

export default { makeJoiDoorQuantityValidatorAdapter };
