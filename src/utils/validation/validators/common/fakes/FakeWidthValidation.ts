import IValidation from '@presentation/protocols/IValidation';

export default class FakeWidthValidation implements IValidation {
  private input: any;

  public validate(input: any): void {
    this.input = input;
  }
}
