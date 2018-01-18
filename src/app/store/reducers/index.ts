import { UsersPageState, usersReducer } from './users/users.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';

export interface UsersListState {
	users: UsersPageState;
}

export const reducers: ActionReducerMap<UsersListState> = {
	users: usersReducer
}