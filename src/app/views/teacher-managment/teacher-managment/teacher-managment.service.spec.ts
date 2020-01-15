import { TestBed } from '@angular/core/testing';

import { TeacherManagmentService } from './teacher-managment.service';

describe('TeacherManagmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherManagmentService = TestBed.get(TeacherManagmentService);
    expect(service).toBeTruthy();
  });
});
