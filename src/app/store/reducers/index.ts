import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store/src/models';

import * as fromUsersReducer from './users/users.reducer';
import * as fromUserReducer from './current/user.reducer';
import * as fromTodosReducer from './todos/todos.reducer';

export interface IAppState {
	users: fromUsersReducer.UsersListState;
	todos: fromTodosReducer.ITodosListState;
	current: fromUserReducer.UserState;
}

// Объект преобразователей состояния
export const reducers: ActionReducerMap<IAppState> = {
	users: fromUsersReducer.reducer,
	current: fromUserReducer.reducer,
	todos: fromTodosReducer.reducer
};

// Получаем доступ к корню дерева состояний feature модуля
export const getAppState = createFeatureSelector<IAppState>('app');

/*** Получаем состояния списка пользователей ***/
export const selectUsersListState = createSelector(
	getAppState,
	(state: IAppState) => state.users
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

// /*** Получаем состояние выбранного пользователя ***/
export const selectCurrentUserState = createSelector(
	getAppState,
	(state: IAppState) => state.current
);

export const selectCurrentUser = createSelector(selectCurrentUserState, fromUserReducer.getData);
export const selectCurrentUserLoading = createSelector(selectCurrentUserState, fromUserReducer.getLoading);
export const selectCurrentUserLoaded = createSelector(selectCurrentUserState, fromUserReducer.getLoaded);

// /*** Получаем состояние списка всех дел ***/
export const selectTodosListState = createSelector(
	getAppState,
	(state: IAppState) => state.todos
);

export const selectAllTodos = createSelector(selectTodosListState, fromTodosReducer.getData);
export const selectAllTodosTags = createSelector(selectTodosListState, fromTodosReducer.getTags);
export const selectTodosListLoading = createSelector(selectTodosListState, fromTodosReducer.getLoading);
export const selectTodosListLoaded = createSelector(selectTodosListState, fromTodosReducer.getLoaded);
