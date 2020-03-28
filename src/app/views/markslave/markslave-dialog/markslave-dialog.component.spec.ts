import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkslaveDialogComponent } from './markslave-dialog.component';

describe('MarkslaveDialogComponent', () => {
  let component: MarkslaveDialogComponent;
  let fixture: ComponentFixture<MarkslaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkslaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkslaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
