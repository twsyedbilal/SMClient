import { TestBed } from '@angular/core/testing';

import { CompliantserviceService } from './compliantservice.service';

describe('CompliantserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompliantserviceService = TestBed.get(CompliantserviceService);
    expect(service).toBeTruthy();
  });
});
