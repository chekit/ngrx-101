import { Action } from '@ngrx/store';

export enum UsersListActions {
	LOAD_USERS = '[Users] Load users list',
	LOAD_USERS_ERROR = '[Users] Load users list failed',
	LOAD_USERS_SUCCESS = '[Users] Load users list succeded'
};

export class LoadUsers implements Action {
	readonly type: string = UsersListActions.LOAD_USERS;
}

export class LoadUsersError implements Action {
	readonly type: string = UsersListActions.LOAD_USERS_ERROR;

	constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
	readonly type: string = UsersListActions.LOAD_USERS_SUCCESS;

	constructor(public payload: any) {}
}

export type UsersActions = LoadUsers | LoadUsersError | LoadUsersSuccess;