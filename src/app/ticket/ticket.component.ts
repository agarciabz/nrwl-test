import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService, Ticket } from '../backend.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketComponent implements OnInit {
  public ticket$: Observable<Ticket> | undefined;
  public ticketId: number | undefined;

  constructor(private backend: BackendService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.ticketId = +this.route.snapshot.paramMap.get('id');
    this.ticket$ = this.backend.ticket(this.ticketId);
  }
}
