import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { GitIssue } from './git-issue';
import { PageResult } from './page-result';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = environment.BASE_URL + 'repos/angular/angular-cli/issues?per_page=10';

  constructor(private http: HttpClient) {}

  getIssues(pageNumber: number): Observable<PageResult> {
    const params = new HttpParams();
    const options = {
      params: new HttpParams().set('page', pageNumber.toString()),
      observe: 'response' as 'body'
    };
    return this.http.get<GitIssue[]>(this.apiUrl, options).pipe(
      map(response => {
        return this.mapToIssueList(response);
      })
    );
  }

  private mapToIssueList(response: any): PageResult {
    const issues = Array.from(response.body, (gitIssue: GitIssue) => {
      return {
        id: gitIssue.id,
        number: gitIssue.number,
        title: gitIssue.title,
        createdAt: new Date(gitIssue.created_at),
        author: gitIssue.user.login
      };
    });
    const link = response.headers.get('Link');
    return { issues, link };
  }
}
