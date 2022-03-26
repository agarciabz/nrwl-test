import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ticketReducer, TicketState } from './ticket.reducer';
import { userReducer, UserState } from './user.reducer';

export interface AppState {
  tickets: TicketState;
  users: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  tickets: ticketReducer,
  users: userReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
