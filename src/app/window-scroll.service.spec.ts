import { TestBed, inject } from '@angular/core/testing';

import { WindowScrollService } from './window-scroll.service';

describe('WindowScrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowScrollService]
    });
  });

  it('should ...', inject([WindowScrollService], (service: WindowScrollService) => {
    expect(service).toBeTruthy();
  }));
});
