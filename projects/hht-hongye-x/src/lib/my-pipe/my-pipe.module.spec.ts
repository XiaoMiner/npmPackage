import { MyPipeModule } from './my-pipe.module';

describe('MyPipeModule', () => {
  let myPipeModule: MyPipeModule;

  beforeEach(() => {
    myPipeModule = new MyPipeModule();
  });

  it('should create an instance', () => {
    expect(myPipeModule).toBeTruthy();
  });
});
