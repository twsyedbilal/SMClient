import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionTableComponent } from './religion-table.component';

describe('ReligionTableComponent', () => {
  let component: ReligionTableComponent;
  let fixture: ComponentFixture<ReligionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
