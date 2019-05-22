import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { Event } from './../events/event';
import { Properties } from '../events/properties';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-issue-timeline-view',
  templateUrl: './issue-timeline-view.component.html',
  styleUrls: ['./issue-timeline-view.component.scss']
})
export class IssueTimelineViewComponent implements OnInit {
  events: Event[];

  constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService, private injector: Injector) {
    this.route.data.subscribe((data: any) => (this.events = data.events));
  }

  getPropertiesInjector(properties: Properties): Injector {
    return Injector.create({
      providers: [{ provide: Properties, useValue: properties }],
      parent: this.injector
    });
  }

  ngOnInit() {}

  navigateToIssueList() {
    this.router.navigateByUrl('/');
  }
}
