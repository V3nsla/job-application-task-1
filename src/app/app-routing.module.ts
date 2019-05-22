import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListViewComponent } from './issue-list/issue-list-view/issue-list-view.component';
import { IssueTimelineViewComponent } from './issue-timeline/issue-timeline-view/issue-timeline-view.component';
import { EventsResolver } from './issue-timeline/services/events-resolver.service';

const routes: Routes = [
  { path: '', component: IssueListViewComponent },
  {
    path: 'issue/:number',
    component: IssueTimelineViewComponent,
    resolve: {
      events: EventsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
