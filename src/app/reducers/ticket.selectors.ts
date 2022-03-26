import { createSelector } from '@ngrx/store';
import { AppState } from './index';

import { TicketState } from './ticket.reducer';

const selectTicketFeature = (state: AppState) => state.tickets;

export const selectTickets = createSelector(
  selectTicketFeature,
  (state: TicketState) => state.tickets
);

export const selectCurrentTicketId = createSelector(
  selectTicketFeature,
  (state: TicketState) => state.selectedTicketId
);

export const selectCurrentTicket = createSelector(
  selectTickets,
  selectCurrentTicketId,
  (tickets, id) => tickets.find(ticket => ticket.id === id)
);
