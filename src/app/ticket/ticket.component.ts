import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ticket } from '../backend.service';
import { getTicket } from '../reducers/ticket.actions';
import { selectCurrentTicket } from '../reducers/ticket.selectors';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  public ticket$ = this.store.select(selectCurrentTicket);
  public ticketId: number | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.ticketId = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(getTicket({ ticketId: this.ticketId }));
  }
}
