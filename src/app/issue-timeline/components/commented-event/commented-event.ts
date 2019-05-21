import { EventName } from '../../events/event-name.enum';
import { Event } from './../../events/event';
import { CommentedEventComponent } from './commented-event.component';

export class CommentedEvent extends Event {
  constructor() {
    super();
    this.name = EventName.Commented;
    this.component = CommentedEventComponent;
  }
}
