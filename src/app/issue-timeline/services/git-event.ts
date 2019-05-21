import { EventName } from '../events/event-name.enum';
import { Properties, Label, Milestone } from '../events/properties';

export interface GitEvent {
  event: EventName;
  actor: GitUser;
  label?: Label;
  milestone?: Milestone;
}

interface GitUser {
  login: string;
}
