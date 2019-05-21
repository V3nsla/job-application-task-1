import { Component, OnInit } from '@angular/core';
import { AbstractEventComponent } from '../../events/abstract-event-component';

@Component({
  selector: 'app-commented-event',
  templateUrl: './commented-event.component.html',
  styleUrls: ['./commented-event.component.scss']
})
export class CommentedEventComponent extends AbstractEventComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
