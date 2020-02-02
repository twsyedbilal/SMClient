import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolDialogComponent } from './school-dialog.component';

describe('SchoolDialogComponent', () => {
  let component: SchoolDialogComponent;
  let fixture: ComponentFixture<SchoolDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
