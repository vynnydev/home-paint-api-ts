import Joi from 'joi';

import IDoorQuantityValidator from '@utils/validation/protocols/common/IDoorQuantityValidator';

export default class DoorQuantityValidatorAdapter implements IDoorQuantityValidator {
  public isValid(door_quantity: any): boolean {
    const schema = Joi.object().keys({
      door_quantity: Joi.number().integer().positive().required(),
    });

    const { error } = schema.validate({ door_quantity });

    if (error) return false;

    return true;
  }
}
