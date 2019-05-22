import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization-interceptor';
import { IssueListViewComponent } from './issue-list/issue-list-view/issue-list-view.component';
import { IssueTimelineModule } from './issue-timeline/issue-timeline.module';
import { LockedEvent } from './locked-event/locked-event';
import { LockedEventComponent } from './locked-event/locked-event.component';
import { Event } from './issue-timeline/events/event';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from './shared/shared.module';
import { EventName } from './issue-timeline/events/event-name.enum';
import { EventsResolver } from './issue-timeline/services/events-resolver.service';

@NgModule({
  declarations: [AppComponent, IssueListViewComponent, LockedEventComponent],
  imports: [
    BrowserModule,
    IssueTimelineModule.forFeature([EventName.Locked]),
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SharedModule
  ],
  providers: [
    EventsResolver,
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
