import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './issue';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { GitIssue } from './git-issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = environment.BASE_URL + 'repos/bulbtech/job-application-task-1/issues';

  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.http.get<GitIssue[]>(this.apiUrl).pipe(map((issues: GitIssue[]) => this.mapToIssueList(issues)));
  }

  private mapToIssueList(gitIssues: GitIssue[]): Issue[] {
    return Array.from(gitIssues, (gitIssue: GitIssue) => {
      return { number: gitIssue.number, title: gitIssue.title, createdAt: new Date(gitIssue.created_at), author: gitIssue.user.login };
    });
  }
}
