import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap, filter, reduce } from 'rxjs/operators';
import { GitEvent } from './git-event';
import { Event } from './../events/event';
import { LabeledEventComponent } from '../components/labeled-event/labeled-event.component';
import { AbstractEventComponent } from '../events/abstract-event-component';
import { EventName } from '../events/event-name.enum';
import { DefaultEventComponent } from '../components/default-event/default-event.component';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient, @Inject(Event) private providedEvents: Event[]) {}

  getEventsForIssue(issueNumber: string): Observable<Event[]> {
    return this.http
      .get<GitEvent[]>(
        environment.BASE_URL + 'repos/bulbtech/job-application-task-1/issues/' + issueNumber + '/timeline',
        this.getAcceptType()
      )
      .pipe(
        map((events: GitEvent[]) => this.mapToEventList(events)),
        tap(events => console.log(events))
      );
  }

  private mapToEventList(gitEvents: GitEvent[]): Event[] {
    console.log(gitEvents);
    return Array.from(gitEvents, (gitEvent: GitEvent) => {
      return this.mapToEvent(gitEvent);
    });
  }

  private mapToEvent(gitEvent: GitEvent): Event {
    return {
      name: gitEvent.event,
      component: this.getComponent(gitEvent.event),
      properties: { actor: gitEvent.actor, label: gitEvent.label, milestone: gitEvent.milestone }
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
