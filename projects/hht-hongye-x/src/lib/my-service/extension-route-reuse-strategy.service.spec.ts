import { TestBed } from '@angular/core/testing';

import { ExtensionRouteReuseStrategyService } from './extension-route-reuse-strategy.service';

describe('ExtensionRouteReuseStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtensionRouteReuseStrategyService = TestBed.get(ExtensionRouteReuseStrategyService);
    expect(service).toBeTruthy();
  });
});
