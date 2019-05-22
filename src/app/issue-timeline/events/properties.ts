export class Properties {
  id: string;
  actor: Actor;
  label?: Label;
  milestone?: Milestone;
  body?: string;
  createdAt: Date;
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
