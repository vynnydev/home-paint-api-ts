import IValidation from '@presentation/protocols/IValidation';

export default class ValidationComposite implements IValidation {
  constructor(private readonly validations: Array<IValidation>) {}

  public validate(input: any): void {
    this.validations.forEach(validation => validation.validate(input));
  }
}
