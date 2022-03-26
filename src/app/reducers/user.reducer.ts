import { createReducer, on } from '@ngrx/store';
import { User } from '../backend.service';
import { getUserList } from './user.actions';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(getUserList, (state, { users }) => ({
    users,
  }))
);
