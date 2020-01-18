import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteTableComponent } from './caste-table.component';

describe('CasteTableComponent', () => {
  let component: CasteTableComponent;
  let fixture: ComponentFixture<CasteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
