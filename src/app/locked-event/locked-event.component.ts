import { Component, OnInit } from '@angular/core';
import { Properties } from '../issue-timeline/events/properties';
import { AbstractEventComponent } from '../issue-timeline/events/abstract-event-component';

@Component({
  selector: 'app-locked-event',
  templateUrl: './locked-event.component.html',
  styleUrls: ['./locked-event.component.scss']
})
export class LockedEventComponent extends AbstractEventComponent implements OnInit {
  constructor(public properties: Properties) {
    super();
  }

  ngOnInit() {}
}
