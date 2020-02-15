import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcompliantComponent } from './dialogcompliant.component';

describe('DialogcompliantComponent', () => {
  let component: DialogcompliantComponent;
  let fixture: ComponentFixture<DialogcompliantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcompliantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcompliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
