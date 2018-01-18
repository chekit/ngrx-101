import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/users/user.model';

export enum UsersListActions {
	LOAD_USERS = '[Users] Load users list',
	LOAD_USERS_SUCCESS = '[Users] Load users list succeded',
	LOAD_USERS_ERROR = '[Users] Load users list failed',

	LOAD_USER = '[User] Load user info',
	LOAD_USER_SUCCESS = '[User] Load user info succeded',
	LOAD_USER_ERROR = '[User] Load user info failed',
};

export class LoadUsers implements Action {
	readonly type: string = UsersListActions.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
	readonly type: string = UsersListActions.LOAD_USERS_SUCCESS;

	constructor(public payload: any) {}
}

export class LoadUsersError implements Action {
	readonly type: string = UsersListActions.LOAD_USERS_ERROR;

	constructor(public payload: any) {}
}

export class LoadUser implements Action {
	readonly type: string = UsersListActions.LOAD_USER;
}

export class LoadUserSuccess implements Action {
	readonly type: string = UsersListActions.LOAD_USER_SUCCESS;

	constructor(public payload: UserModel) {}
}

export class LoadUserError implements Action {
	readonly type: string = UsersListActions.LOAD_USER_ERROR;

	constructor(public payload: any) {}
}

export type UsersActions = LoadUsers | LoadUsersError | LoadUsersSuccess | LoadUser | LoadUserError | LoadUserSuccess;