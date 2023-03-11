import { createAction, props } from '@ngrx/store';
import { User } from '../_shared/model/model';

export const submitUser = createAction(
  '[Home] Submit User',
  props<{ user: User }>()
);
