import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueTimelineViewComponent } from './issue-timeline-view/issue-timeline-view.component';
import { LabeledEventComponent } from './components/labeled-event/labeled-event.component';
import { CommentedEventComponent } from './components/commented-event/commented-event.component';
import { LabeledEvent } from './components/labeled-event/labeled-event';
import { CommentedEvent } from './components/commented-event/commented-event';
import { Event } from './events/event';
import { DefaultEventComponent } from './components/default-event/default-event.component';

@NgModule({
  declarations: [IssueTimelineViewComponent, LabeledEventComponent, CommentedEventComponent, DefaultEventComponent],
  imports: [CommonModule],
  providers: [{ provide: Event, useClass: LabeledEvent, multi: true }, { provide: Event, useClass: CommentedEvent, multi: true }],
  exports: [IssueTimelineViewComponent],
  entryComponents: [LabeledEventComponent, CommentedEventComponent, DefaultEventComponent]
})
export class IssueTimelineModule {}
