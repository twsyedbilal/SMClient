import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherTongueMasterComponent } from './mother-tongue-master.component';

describe('MotherTongueMasterComponent', () => {
  let component: MotherTongueMasterComponent;
  let fixture: ComponentFixture<MotherTongueMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotherTongueMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherTongueMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
