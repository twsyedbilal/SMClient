import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliantTypeDialogComponent } from './compliant-type-dialog.component';

describe('CompliantTypeDialogComponent', () => {
  let component: CompliantTypeDialogComponent;
  let fixture: ComponentFixture<CompliantTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliantTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliantTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
