import { UsersListState, usersListReducer, selectUsersList, selectUsersListLoaded, selectUsersListLoading } from './users/users.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userReducer, UserState, selectUserInfo, selectUserLoading, selectUserLoaded } from './users/user.reducer';

export interface IUsersPageState {
	users: UsersListState;
	current: UserState;
}

// Объект преобразователей состояния
export const reducers: ActionReducerMap<IUsersPageState> = {
	users: usersListReducer,
	current: userReducer
};

// Получаем доступ к корню дерева состояний feature модуля
export const getUsersPageState = createFeatureSelector<IUsersPageState>(
	'users_page'
);

// Получаем состояние списка пользователей
export const getUsersListState = createSelector(
	getUsersPageState,
	(state: IUsersPageState) => state.users
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

/*** Получаем состояние выбранного пользователя ***/
export const getCurrentUserState = createSelector(
	getUsersPageState,
	(state: IUsersPageState) => state.current
);

export const getCurrentUser = createSelector(getCurrentUserState, selectUserInfo);
export const getCurrentUserLoading = createSelector(getCurrentUserState, selectUserLoading);
export const getCurrentUserLoaded = createSelector(getCurrentUserState, selectUserLoaded);


// export const getCurrentUserInfo = createSelector(getUserState, selectUserInfo);