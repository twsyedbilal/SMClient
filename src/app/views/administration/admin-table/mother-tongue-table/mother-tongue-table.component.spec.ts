import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherTongueTableComponent } from './mother-tongue-table.component';

describe('MotherTongueTableComponent', () => {
  let component: MotherTongueTableComponent;
  let fixture: ComponentFixture<MotherTongueTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherTongueTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherTongueTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
