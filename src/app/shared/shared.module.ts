import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [TimeAgoPipe, PaginatorComponent],
  imports: [CommonModule],
  exports: [TimeAgoPipe, PaginatorComponent]
})
export class SharedModule {}
