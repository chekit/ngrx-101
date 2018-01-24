import { createSelector } from '@ngrx/store';

import * as fromReducers from './../reducers';
import * as fromTodosReducer from './../reducers/todos/todos.reducer';

// /*** Получаем состояние списка всех дел ***/
export const selectTodosListState = createSelector(
	fromReducers.getAppState,
	(state: fromReducers.IAppState) => state.todos
);

export const selectAllTodos = createSelector(selectTodosListState, fromTodosReducer.getData);
export const selectAllTodosTags = createSelector(selectTodosListState, fromTodosReducer.getTags);
export const selectTodosListLoading = createSelector(selectTodosListState, fromTodosReducer.getLoading);
export const selectTodosListLoaded = createSelector(selectTodosListState, fromTodosReducer.getLoaded);