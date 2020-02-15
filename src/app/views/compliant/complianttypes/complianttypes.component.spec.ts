import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianttypesComponent } from './complianttypes.component';

describe('ComplianttypesComponent', () => {
  let component: ComplianttypesComponent;
  let fixture: ComponentFixture<ComplianttypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianttypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
