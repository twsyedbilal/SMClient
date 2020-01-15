import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteMasterComponent } from './caste-master.component';

describe('CasteMasterComponent', () => {
  let component: CasteMasterComponent;
  let fixture: ComponentFixture<CasteMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasteMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
