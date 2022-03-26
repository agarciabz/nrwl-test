import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectTickets } from '../reducers/ticket.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public tickets$ = this.store.select(selectTickets);

  constructor(private store: Store) {
    this.tickets$.subscribe(console.debug);
  }
}
