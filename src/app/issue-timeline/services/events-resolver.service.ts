import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { EventsService } from './events.service';
import { Event } from '../events/event';

@Injectable()
export class EventsResolver implements Resolve<Observable<Event[]>> {
  constructor(private eventsService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const issueNumber = route.params.number;
    return this.eventsService.getEventsForIssue(issueNumber);
  }
}
