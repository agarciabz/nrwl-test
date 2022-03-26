import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BackendService } from './backend.service';
import { getTicketList } from './reducers/ticket.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private backend: BackendService, private store: Store) {}

  public ngOnInit(): void {
    this.backend.tickets().subscribe(tickets =>
      this.store.dispatch(
        getTicketList({
          tickets,
        })
      )
    );
  }
}
