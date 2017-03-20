import { TestBed, inject } from '@angular/core/testing';

import { CadexchangeService } from './cadexchange.service';

describe('CadexchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadexchangeService]
    });
  });

  it('should ...', inject([CadexchangeService], (service: CadexchangeService) => {
    expect(service).toBeTruthy();
  }));
});
