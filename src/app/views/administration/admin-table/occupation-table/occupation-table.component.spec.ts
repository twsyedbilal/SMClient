import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationTableComponent } from './occupation-table.component';

describe('OccupationTableComponent', () => {
  let component: OccupationTableComponent;
  let fixture: ComponentFixture<OccupationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
