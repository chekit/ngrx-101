import { UsersPageState, usersReducer, selectUsers } from './users/users.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UsersListState {
	users: UsersPageState;
}

export const reducers: ActionReducerMap<UsersListState> = {
	users: usersReducer
}

// @TODO: работает с forFeature
export const getUsersListState = createFeatureSelector<UsersListState>(
	'users'
  );

export const getUsersState = createSelector(
	getUsersListState,
	(state: UsersListState) => state.users
);

export const getAllUsers = createSelector(getUsersState, selectUsers);