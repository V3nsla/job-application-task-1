export class Properties {
  id: string;
  actor: Actor;
  label?: Label;
  milestone?: Milestone;
  body?: string;
  created_at: Date;
}

export interface Actor {
  login: string;
}

export interface Label {
  name?: string;
  color?: string;
}
export interface Milestone {
  title?: string;
}
