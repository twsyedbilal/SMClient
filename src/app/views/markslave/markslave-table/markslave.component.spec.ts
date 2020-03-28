import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkSlaveComponent } from './markslave.component';



describe('MarkSlaveComponent', () => {
  let component: MarkSlaveComponent;
  let fixture: ComponentFixture<MarkSlaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkSlaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkSlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
