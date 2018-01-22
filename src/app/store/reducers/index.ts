import { UsersListState, usersListReducer, selectUsersList, selectUsersListLoaded, selectUsersListLoading, selectUsersListQuery } from './users/users.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userReducer, UserState, selectUserInfo, selectUserLoading, selectUserLoaded } from './users/user.reducer';
import { ITodosState, todosListReducer, selectTodosList, selectTodosLoading, selectTodosLoaded, selectTodosListTags } from './todos/todos.reducer';

export interface IAppState {
	users: UsersListState;
	todos: ITodosState;
	current: UserState;
}

// Объект преобразователей состояния
export const reducers: ActionReducerMap<IAppState> = {
	users: usersListReducer,
	current: userReducer,
	todos: todosListReducer
};

// Получаем доступ к корню дерева состояний feature модуля
export const getAppState = createFeatureSelector<IAppState>(
	'app'
);

// Получаем состояние списка пользователей
export const getUsersListState = createSelector(
	getAppState,
	(state: IAppState) => state.users
);

/*** Получаем состояния списка пользователей ***/
// Получаем значение свойства data
export const getAllUsers = createSelector(getUsersListState, selectUsersList);
// Получаем части состояния списка пользователей
// Получаем значение свойства loading
export const getUsersLoading = createSelector(getUsersListState, selectUsersListLoading);
// Получаем части состояния списка пользователей
// Получаем значение свойства loaded
export const getUsersLoaded = createSelector(getUsersListState, selectUsersListLoaded);
// Получаем части состояния списка пользователей
// Получаем значение свойства query
export const getFilterQuery = createSelector(getUsersListState, selectUsersListQuery);

/*** Получаем состояние выбранного пользователя ***/
export const getCurrentUserState = createSelector(
	getAppState,
	(state: IAppState) => state.current
);

export const getCurrentUser = createSelector(getCurrentUserState, selectUserInfo);
export const getCurrentUserLoading = createSelector(getCurrentUserState, selectUserLoading);
export const getCurrentUserLoaded = createSelector(getCurrentUserState, selectUserLoaded);

/*** Получаем состояние списка всех дел ***/
export const getTodosListState = createSelector(
	getAppState,
	(state: IAppState) => state.todos
);

export const getAllTodos = createSelector(getTodosListState, selectTodosList);
export const getAllTodosTags = createSelector(getTodosListState, selectTodosListTags);
export const getTodosListLoading = createSelector(getTodosListState, selectTodosLoading);
export const getTodosListLoaded = createSelector(getTodosListState, selectTodosLoaded);
