import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTypeMasterComponent } from './school-type-master.component';

describe('SchoolTypeMasterComponent', () => {
  let component: SchoolTypeMasterComponent;
  let fixture: ComponentFixture<SchoolTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
