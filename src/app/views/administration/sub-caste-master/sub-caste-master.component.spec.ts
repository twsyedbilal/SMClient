import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCasteMasterComponent } from './sub-caste-master.component';

describe('SubCasteMasterComponent', () => {
  let component: SubCasteMasterComponent;
  let fixture: ComponentFixture<SubCasteMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCasteMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCasteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
