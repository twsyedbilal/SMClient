import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocityMasterComponent } from './socity-master.component';

describe('SocityMasterComponent', () => {
  let component: SocityMasterComponent;
  let fixture: ComponentFixture<SocityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
