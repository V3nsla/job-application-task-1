import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from './../events/event';
import { Properties } from '../events/properties';

@Component({
  selector: 'app-issue-timeline-view',
  templateUrl: './issue-timeline-view.component.html',
  styleUrls: ['./issue-timeline-view.component.scss']
})
export class IssueTimelineViewComponent implements OnInit {
  events: Event[];
  pageNumber: string;

  constructor(private route: ActivatedRoute, private router: Router, private injector: Injector) {
    this.route.data.subscribe((data: any) => (this.events = data.events));
    this.route.queryParamMap.subscribe(params => (this.pageNumber = params.get('page')));
  }

  getPropertiesInjector(properties: Properties): Injector {
    return Injector.create({
      providers: [{ provide: Properties, useValue: properties }],
      parent: this.injector
    });
  }

  ngOnInit() {}

  navigateToIssueList() {
    this.router.navigate(['/'], { queryParams: { page: this.pageNumber } });
  }
}
