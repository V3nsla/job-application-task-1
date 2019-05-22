import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input()
  currentPage: number;

  @Input()
  disabled: boolean;

  @Input()
  link: string;

  @Output()
  paginate: EventEmitter<number> = new EventEmitter();

  lastPage: number;

  constructor() {}

  ngOnInit() {
    this.setLastPage(this.link);
  }

  next() {
    this.currentPage++;
    this.paginate.emit(this.currentPage);
  }

  previous() {
    this.currentPage--;
    this.paginate.emit(this.currentPage);
  }

  first() {
    this.currentPage = 1;
    this.paginate.emit(this.currentPage);
  }
  last() {
    this.currentPage = this.lastPage;
    this.paginate.emit(this.currentPage);
  }

  setLastPage(link: string) {
    let number: string;
    const lastRelregex = 'page=\\d*>; rel="last"';
    const prevRelregex = 'page=\\d*>; rel="prev"';
    const numberRegex = '\\d+';

    let last = link.match(lastRelregex);

    if (last) {
      let lastString = last.toString();
      number = lastString.match(numberRegex).toString();
      this.lastPage = +number;
    } else {
      const prev = link.match(prevRelregex).toString();
      number = prev.match(numberRegex).toString();
      this.lastPage = +number + 1;
    }
  }
}
