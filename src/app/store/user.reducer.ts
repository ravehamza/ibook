import { createReducer, on } from '@ngrx/store';
import { User } from '../_shared/model/model';
import { submitUser } from './user.actions';

export interface UserState {
  user: User;
}

export const initialState: ReadonlyArray<User> = [];

export const userReducer = createReducer(
  initialState,
  on(submitUser, (state, { user }) => {
    let newState = [...state];
    newState.unshift(user);
    return newState;
  })
);
