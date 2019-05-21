import { Component, OnInit } from '@angular/core';
import { AbstractEventComponent } from '../../events/abstract-event-component';
import { Properties } from '../../events/properties';

@Component({
  selector: 'app-default-event',
  templateUrl: './default-event.component.html',
  styleUrls: ['./default-event.component.scss']
})
export class DefaultEventComponent extends AbstractEventComponent implements OnInit {
  constructor(public properties: Properties) {
    super();
  }

  ngOnInit() {}
}
