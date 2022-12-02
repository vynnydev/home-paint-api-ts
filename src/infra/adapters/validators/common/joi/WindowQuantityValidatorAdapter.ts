import Joi from 'joi';

import IWindowQuantityValidator from '@utils/validation/protocols/common/IWindowQuantityValidator';

export default class WindowQuantityValidatorAdapter implements IWindowQuantityValidator {
  public isValid(window_quantity: any): boolean {
    const schema = Joi.object().keys({
      window_quantity: Joi.number().integer().positive().required(),
    });

    const { error } = schema.validate({ window_quantity });

    if (error) return false;

    return true;
  }
}
