import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListViewComponent } from './issue-list/issue-list-view/issue-list-view.component';

const routes: Routes = [{ path: '', component: IssueListViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
