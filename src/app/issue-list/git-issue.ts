export interface GitIssue {
  id: string;
  number: string;
  title: string;
  created_at: string;
  user: GitUser;
}

interface GitUser {
  login: string;
}
