import { TestBed } from '@angular/core/testing';

import { StudnetMarkService } from './studnet-mark.service';

describe('StudnetMarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudnetMarkService = TestBed.get(StudnetMarkService);
    expect(service).toBeTruthy();
  });
});
