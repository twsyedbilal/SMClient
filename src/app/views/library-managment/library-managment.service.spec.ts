import { TestBed } from '@angular/core/testing';

import { LibraryManagmentService } from './library-managment.service';

describe('LibraryManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryManagmentService = TestBed.get(LibraryManagmentService);
    expect(service).toBeTruthy();
  });
});
