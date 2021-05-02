import { TestBed } from '@angular/core/testing';

import { WaiterMenuService } from './waiter-menu.service';

describe('WaiterMenuService', () => {
  let service: WaiterMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaiterMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
