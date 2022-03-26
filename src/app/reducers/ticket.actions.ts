import { createAction, props } from '@ngrx/store';
import { Ticket } from '../backend.service';

export const createTicket = createAction(
  'Create ticket',
  props<{ ticket: Ticket }>()
);

export const getTicket = createAction(
  'Get ticket',
  props<{ ticketId: number }>()
);

export const getTicketList = createAction(
  'Get ticket list',
  props<{ tickets: Ticket[] }>()
);
