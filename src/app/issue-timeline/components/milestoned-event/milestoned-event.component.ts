import { Component, OnInit } from '@angular/core';
import { AbstractEventComponent } from '../../events/abstract-event-component';
import { Properties } from '../../events/properties';

@Component({
  selector: 'app-milestoned-event',
  templateUrl: './milestoned-event.component.html',
  styleUrls: ['./milestoned-event.component.scss']
})
export class MilestonedEventComponent extends AbstractEventComponent implements OnInit {
  constructor(public properties: Properties) {
    super();
  }

  ngOnInit() {}
}
