import { TestBed } from '@angular/core/testing';

import { MarkslaveService } from './markslave.service';

describe('MarkslaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkslaveService = TestBed.get(MarkslaveService);
    expect(service).toBeTruthy();
  });
});
