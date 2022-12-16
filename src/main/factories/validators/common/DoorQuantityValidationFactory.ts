import IValidation from '@presentation/protocols/IValidation';

import DoorQuantityValidation from '@utils/validation/validators/common/DoorQuantityValidation';
import joiDoorQuantityValidatorAdapterFactory from '@main/factories/adapters/validators/common/JoiDoorQuantityValidatorAdapterFactory';

const makeDoorQuantityValidation = (): IValidation => {
  const fieldDoorQuantity = 'door_quantity';
  const joiDoorQuantityValidatorAdapter =
    joiDoorQuantityValidatorAdapterFactory.makeJoiDoorQuantityValidatorAdapter();

  const doorQuantityValidation = new DoorQuantityValidation(
    fieldDoorQuantity,
    joiDoorQuantityValidatorAdapter,
  );

  return doorQuantityValidation;
};

export default { makeDoorQuantityValidation };
