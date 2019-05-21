import { Component, OnInit, ɵConsole } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list-view',
  templateUrl: './issue-list-view.component.html',
  styleUrls: ['./issue-list-view.component.scss']
})
export class IssueListViewComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues: Issue[]) => {
      this.issues = issues;
    });
  }
}
