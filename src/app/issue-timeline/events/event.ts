import { EventName } from './event-name.enum';
import { Type } from '@angular/core';
import { Properties } from './properties';
import { AbstractEventComponent } from './abstract-event-component';

export class Event {
  name: EventName;
  component: AbstractEventComponent;
  properties?: Properties;
}
