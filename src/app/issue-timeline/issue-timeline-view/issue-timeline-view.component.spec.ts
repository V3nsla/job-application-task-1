import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTimelineViewComponent } from './issue-timeline-view.component';

describe('IssueTimelineViewComponent', () => {
  let component: IssueTimelineViewComponent;
  let fixture: ComponentFixture<IssueTimelineViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueTimelineViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueTimelineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
