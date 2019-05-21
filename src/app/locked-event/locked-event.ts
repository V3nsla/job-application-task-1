import { EventName } from './../issue-timeline/events/event-name.enum';
import { Event } from './../issue-timeline/events/event';
import { LockedEventComponent } from './locked-event.component';

export class LockedEvent extends Event {
  constructor() {
    super();
    this.name = EventName.Locked;
    this.component = LockedEventComponent;
  }
}
