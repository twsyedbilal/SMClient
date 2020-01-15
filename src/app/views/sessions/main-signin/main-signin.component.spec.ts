import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSigninComponent } from './main-signin.component';

describe('MainSigninComponent', () => {
  let component: MainSigninComponent;
  let fixture: ComponentFixture<MainSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
