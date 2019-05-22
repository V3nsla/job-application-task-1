import { EventName } from '../../events/event-name.enum';
import { Event } from '../../events/event';
import { MilestonedEventComponent } from './milestoned-event.component';

export class MilestonedEvent extends Event {
  constructor() {
    super();
    this.name = EventName.Milestoned;
    this.component = MilestonedEventComponent;
  }
}
