import IDoorQuantityValidator from '@utils/validation/protocols/common/IDoorQuantityValidator';

export default class FakeDoorQuantityValidatorAdapter implements IDoorQuantityValidator {
  public isValid(name: any): boolean {
    return true;
  }
}
