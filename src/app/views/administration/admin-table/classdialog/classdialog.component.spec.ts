import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdialogComponent } from './classdialog.component';

describe('ClassdialogComponent', () => {
  let component: ClassdialogComponent;
  let fixture: ComponentFixture<ClassdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
