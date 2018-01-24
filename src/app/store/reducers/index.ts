import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store/src/models';

import * as fromUsersReducer from './users/users.reducer';
import * as fromUserReducer from './current/user.reducer';
import * as fromTodosReducer from './todos/todos.reducer';

export interface IAppState {
	users: fromUsersReducer.IUsersListState;
	todos: fromTodosReducer.ITodosListState;
	current: fromUserReducer.IUserState;
}

// Объект преобразователей состояния
export const reducers: ActionReducerMap<IAppState> = {
	users: fromUsersReducer.reducer,
	current: fromUserReducer.reducer,
	todos: fromTodosReducer.reducer
};

// Получаем доступ к корню дерева состояний feature модуля
export const selectAppState = createFeatureSelector<IAppState>('app');
