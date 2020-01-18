import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityTableComponent } from './nationality-table.component';

describe('NationalityTableComponent', () => {
  let component: NationalityTableComponent;
  let fixture: ComponentFixture<NationalityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
