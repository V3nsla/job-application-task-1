import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization-interceptor';
import { IssueListViewComponent } from './issue-list/issue-list-view/issue-list-view.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { IssueTimelineModule } from './issue-timeline/issue-timeline.module';
import { LockedEvent } from './locked-event/locked-event';
import { LockedEventComponent } from './locked-event/locked-event.component';
import { Event } from './issue-timeline/events/event';

@NgModule({
  declarations: [AppComponent, IssueListViewComponent, TimeAgoPipe, LockedEventComponent],
  imports: [BrowserModule, IssueTimelineModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: Event,
      useClass: LockedEvent,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LockedEventComponent]
})
export class AppModule {}
