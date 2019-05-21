import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentedEventComponent } from './commented-event.component';

describe('LabeledEventComponent', () => {
  let component: CommentedEventComponent;
  let fixture: ComponentFixture<CommentedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentedEventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
