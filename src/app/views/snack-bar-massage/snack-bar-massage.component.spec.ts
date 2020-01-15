import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarMassageComponent } from './snack-bar-massage.component';

describe('SnackBarMassageComponent', () => {
  let component: SnackBarMassageComponent;
  let fixture: ComponentFixture<SnackBarMassageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarMassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
