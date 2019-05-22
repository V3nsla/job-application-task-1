import { EventName } from '../events/event-name.enum';
import { Label, Milestone } from '../events/properties';

export interface GitEvent {
  id: string;
  event: EventName;
  created_at: Date;
  actor: GitUser;
  label?: Label;
  milestone?: Milestone;
  body: string;
}

interface GitUser {
  login: string;
}
