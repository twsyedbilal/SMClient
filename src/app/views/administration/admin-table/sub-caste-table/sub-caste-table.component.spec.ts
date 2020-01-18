import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCasteTableComponent } from './sub-caste-table.component';

describe('SubCasteTableComponent', () => {
  let component: SubCasteTableComponent;
  let fixture: ComponentFixture<SubCasteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCasteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCasteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
