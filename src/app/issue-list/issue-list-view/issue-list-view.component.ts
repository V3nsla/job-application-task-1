import { Component, OnInit, ɵConsole } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';
import { Router, ActivatedRoute } from '@angular/router';
import { PageResult } from '../page-result';

@Component({
  selector: 'app-issue-list-view',
  templateUrl: './issue-list-view.component.html',
  styleUrls: ['./issue-list-view.component.scss']
})
export class IssueListViewComponent implements OnInit {
  issues: Issue[];
  loading = true;
  disablePaginator: boolean;
  pageNumber: number;
  link: string;

  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.pageNumber = +params.get('page') || 1;
      this.getIssues(this.pageNumber);
    });
  }

  getIssues(pageNumber) {
    this.pageNumber = pageNumber;
    this.disablePaginator = true;
    this.issueService.getIssues(pageNumber).subscribe((result: PageResult) => {
      this.issues = result.issues;
      this.link = result.link;
      this.loading = false;
      this.disablePaginator = false;
    });
  }

  navigateToIssue(issue: Issue) {
    this.router.navigate(['/issue/' + issue.number], {
      queryParams: {
        page: this.pageNumber
      }
    });
  }
}
