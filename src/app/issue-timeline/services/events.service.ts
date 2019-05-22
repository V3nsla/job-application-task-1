import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { GitEvent } from './git-event';
import { Event } from './../events/event';
import { AbstractEventComponent } from '../events/abstract-event-component';
import { EventName } from '../events/event-name.enum';
import { DefaultEventComponent } from '../components/default-event/default-event.component';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(
    private http: HttpClient,
    @Inject(Event) private providedEvents: Event[],
    @Inject('EXCLUDED_EVENTS') private excludedEvents: EventName[]
  ) {}

  getEventsForIssue(issueNumber: string): Observable<Event[]> {
    return this.http
      .get<GitEvent[]>(environment.BASE_URL + 'repos/angular/angular-cli/issues/' + issueNumber + '/timeline', this.getAcceptType())
      .pipe(
        map((events: GitEvent[]) => this.mapToEventList(events)),
        map((events: Event[]) => {
          return events.filter(item => !this.excludedEvents.includes(item.name));
        })
      );
  }

  private mapToEventList(gitEvents: GitEvent[]): Event[] {
    return Array.from(gitEvents, (gitEvent: GitEvent) => {
      return this.mapToEvent(gitEvent);
    });
  }

  private mapToEvent(gitEvent: GitEvent): Event {
    return {
      name: gitEvent.event,
      component: this.getComponent(gitEvent.event),
      properties: gitEvent
    };
  }

  private getComponent(name: EventName): AbstractEventComponent {
    const event = this.providedEvents.find(event => event.name === name);
    if (event) {
      return event.component;
    } else {
      return DefaultEventComponent;
    }
  }

  private getAcceptType(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.mockingbird-preview'
      })
    };
  }
}
