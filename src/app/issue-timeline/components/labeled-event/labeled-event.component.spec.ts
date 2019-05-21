import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledEventComponent } from './labeled-event.component';

describe('LabeledEventComponent', () => {
  let component: LabeledEventComponent;
  let fixture: ComponentFixture<LabeledEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
