import IWindowQuantityValidator from '@utils/validation/protocols/common/IWindowQuantityValidator';

export default class FakeWindowQuantityValidatorAdapter implements IWindowQuantityValidator {
  public isValid(name: any): boolean {
    return true;
  }
}
