import { EventName } from './event-name.enum';
import { Properties } from './properties';
import { AbstractEventComponent } from './abstract-event-component';

export class Event {
  name: EventName;
  component: AbstractEventComponent;
  properties?: Properties;
}
