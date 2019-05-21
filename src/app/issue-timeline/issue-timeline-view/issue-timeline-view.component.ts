import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';
import { Event } from './../events/event';
import { Properties } from '../events/properties';

@Component({
  selector: 'app-issue-timeline-view',
  templateUrl: './issue-timeline-view.component.html',
  styleUrls: ['./issue-timeline-view.component.scss']
})
export class IssueTimelineViewComponent implements OnInit {
  events: Event[];

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private injector: Injector) {
    const issueNumber = this.route.snapshot.paramMap.get('number');
    this.eventsService.getEventsForIssue(issueNumber).subscribe(events => {
      this.events = events;
    });
  }

  getPropertiesInjector(properties: Properties): Injector {
    return Injector.create({
      providers: [{ provide: Properties, useValue: properties }],
      parent: this.injector
    });
  }

  ngOnInit() {}
}
