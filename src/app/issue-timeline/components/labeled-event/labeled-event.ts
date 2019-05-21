import { EventName } from '../../events/event-name.enum';
import { Event } from './../../events/event';
import { LabeledEventComponent } from './labeled-event.component';

export class LabeledEvent extends Event {
  constructor() {
    super();
    this.name = EventName.Labeled;
    this.component = LabeledEventComponent;
  }
}
