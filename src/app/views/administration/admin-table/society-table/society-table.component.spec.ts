import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyTableComponent } from './society-table.component';

describe('SocietyTableComponent', () => {
  let component: SocietyTableComponent;
  let fixture: ComponentFixture<SocietyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocietyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
