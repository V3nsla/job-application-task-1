import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueTimelineViewComponent } from './issue-timeline-view/issue-timeline-view.component';
import { LabeledEventComponent } from './components/labeled-event/labeled-event.component';
import { CommentedEventComponent } from './components/commented-event/commented-event.component';
import { EventName } from './events/event-name.enum';
import { LabeledEvent } from './components/labeled-event/labeled-event';
import { CommentedEvent } from './components/commented-event/commented-event';
import { Event } from './events/event';
import { DefaultEventComponent } from './components/default-event/default-event.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../shared/shared.module';
import { MilestonedEventComponent } from './components/milestoned-event/milestoned-event.component';
import { MilestonedEvent } from './components/milestoned-event/milestoned-event';

@NgModule({
  declarations: [
    IssueTimelineViewComponent,
    LabeledEventComponent,
    CommentedEventComponent,
    DefaultEventComponent,
    MilestonedEventComponent
  ],
  imports: [CommonModule, AngularFontAwesomeModule, SharedModule],
  exports: [IssueTimelineViewComponent],
  entryComponents: [LabeledEventComponent, CommentedEventComponent, DefaultEventComponent, MilestonedEventComponent]
})
export class IssueTimelineModule {
  static forFeature(excludeEventsFromView: Array<EventName>): ModuleWithProviders {
    return {
      ngModule: IssueTimelineModule,
      providers: [
        { provide: 'EXCLUDED_EVENTS', useValue: excludeEventsFromView },
        { provide: Event, useClass: LabeledEvent, multi: true },
        { provide: Event, useClass: CommentedEvent, multi: true },
        { provide: Event, useClass: MilestonedEvent, multi: true }
      ]
    };
  }
}
