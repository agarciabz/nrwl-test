import { createAction, props } from '@ngrx/store';
import { User } from '../backend.service';

export const getUser = createAction('Get user', props<{ user: User }>());

export const getUserList = createAction(
  'Get user list',
  props<{ users: User[] }>()
);
