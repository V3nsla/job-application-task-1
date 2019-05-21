import { EventName } from '../../events/event-name.enum';
import { Event } from '../../events/event';
import { DefaultEventComponent } from './default-event.component';

export class CommentedEvent extends Event {
  constructor() {
    super();
    this.name = EventName.Labeled;
    this.component = DefaultEventComponent;
  }
}
