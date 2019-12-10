import { TestBed } from '@angular/core/testing';

import { HhtHongyeXService } from './hht-hongye-x.service';

describe('HhtHongyeXService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HhtHongyeXService = TestBed.get(HhtHongyeXService);
    expect(service).toBeTruthy();
  });
});
