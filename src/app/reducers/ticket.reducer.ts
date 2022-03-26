import { tick } from '@angular/core/testing';
import { createReducer, on } from '@ngrx/store';
import { Ticket } from '../backend.service';
import { createTicket, getTicket, getTicketList } from './ticket.actions';

export interface TicketState {
  tickets: Ticket[];
  selectedTicketId?: number;
}

export const initialState: TicketState = {
  tickets: [],
};

export const ticketReducer = createReducer(
  initialState,
  on(getTicketList, (state, { tickets }) => {
    return {
      tickets: [...tickets],
    };
  }),
  on(createTicket, (state, { ticket }) => {
    const currentTickets = state.tickets;
    if (currentTickets.indexOf(ticket) > -1) return state;

    return { tickets: [...currentTickets, ticket] };
  }),
  on(getTicket, (state, { ticketId }) => {
    return {
      tickets: state.tickets,
      selectedTicketId: ticketId,
    };
  })
);
