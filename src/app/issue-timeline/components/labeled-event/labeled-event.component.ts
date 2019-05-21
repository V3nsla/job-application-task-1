import { Component, OnInit, Input, Inject } from '@angular/core';
import { AbstractEventComponent } from '../../events/abstract-event-component';
import { Properties } from '../../events/properties';

@Component({
  selector: 'app-labeled-event',
  templateUrl: './labeled-event.component.html',
  styleUrls: ['./labeled-event.component.scss']
})
export class LabeledEventComponent extends AbstractEventComponent implements OnInit {
  constructor(public properties: Properties) {
    super();
    console.log(this.properties);
  }

  ngOnInit() {}
}
