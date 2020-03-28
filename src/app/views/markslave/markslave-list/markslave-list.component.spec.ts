import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkslaveListComponent } from './markslave-list.component';

describe('MarkslaveListComponent', () => {
  let component: MarkslaveListComponent;
  let fixture: ComponentFixture<MarkslaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkslaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkslaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
