export class Properties {
  actor: Actor;
  label?: Label;
  milestone?: Milestone;
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
