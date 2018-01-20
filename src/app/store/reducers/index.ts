import { UsersListState, usersListReducer, selectUsersList, selectUsersListLoaded, selectUsersListLoading } from './users/users.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userReducer, UserState, selectUserInfo } from './users/user.reducer';

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

// Получаем части состояния списка пользователей
// Получаем значение свойства data
export const getAllUsers = createSelector(getUsersListState, selectUsersList);
// Получаем части состояния списка пользователей
// Получаем значение свойства loading
export const getUsersLoading = createSelector(getUsersListState, selectUsersListLoading);
// Получаем части состояния списка пользователей
// Получаем значение свойства loaded
export const getUsersLoaded = createSelector(getUsersListState, selectUsersListLoaded);

// @TODO: работает с forFeature
// export const getCurrentState = createFeatureSelector<UsersPageState>(
// 	'current'
// );

// export const getUserState = createSelector(
// 	getCurrentState,
// 	(state: UsersPageState) => {
// 		console.log(state)
		
// 		return state.current;
// 	}
// );

// export const getCurrentUserInfo = createSelector(getUserState, selectUserInfo);