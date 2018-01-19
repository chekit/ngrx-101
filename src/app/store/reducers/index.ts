import { UsersListState, usersReducer, selectUsers } from './users/users.reducer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userReducer, UserState, selectUserInfo } from './users/user.reducer';

export interface UsersPageState {
	users: UsersListState;
	current: UserState;
}

export const reducers: ActionReducerMap<UsersPageState> = {
	users: usersReducer,
	current: userReducer
};

// @TODO: работает с forFeature
export const getUsersListState = createFeatureSelector<UsersPageState>(
	'users'
);

export const getUsersState = createSelector(
	getUsersListState,
	(state: UsersPageState) => {
		console.log(state)
		
		return state.users;
	}
);

export const getAllUsers = createSelector(getUsersState, selectUsers);

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