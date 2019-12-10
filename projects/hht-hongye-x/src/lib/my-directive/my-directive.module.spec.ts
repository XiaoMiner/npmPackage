import { MyDirectiveModule } from './my-directive.module';

describe('MyDirectiveModule', () => {
  let myDirectiveModule: MyDirectiveModule;

  beforeEach(() => {
    myDirectiveModule = new MyDirectiveModule();
  });

  it('should create an instance', () => {
    expect(myDirectiveModule).toBeTruthy();
  });
});
