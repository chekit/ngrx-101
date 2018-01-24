import { createSelector } from '@ngrx/store';
import * as fromReducers from './../reducers';
import * as fromUsersReducer from './../reducers/users/users.reducer';

/*** Получаем состояния списка пользователей ***/
export const selectUsersListState = createSelector(
	fromReducers.selectAppState,
	(state: fromReducers.IAppState) => state.users
);

// Получаем значение свойства data
export const selectAllUsers = createSelector(selectUsersListState, fromUsersReducer.getData);
// Получаем части состояния списка пользователей
// Получаем значение свойства loading
export const selectUsersLoading = createSelector(selectUsersListState, fromUsersReducer.getLoading);
// Получаем части состояния списка пользователей
// Получаем значение свойства loaded
export const selectUsersLoaded = createSelector(selectUsersListState, fromUsersReducer.getLoaded);
// Получаем части состояния списка пользователей
// Получаем значение свойства query
export const selectUsersFilterQuery = createSelector(selectUsersListState, fromUsersReducer.getQuery);