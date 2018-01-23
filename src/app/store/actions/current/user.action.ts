import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/users/user.model';
import { UserInfoModel } from '../../../models/users/user-info.model';
import { TodoModel } from '../../../models/todos/todo.model';

export enum UserActionsTypes {
	LOAD_USER = '[User] Load user info',
	LOAD_TODO_USER = '[User] Load user info for todos list',
	LOAD_USER_SUCCESS = '[User] Load user info succeded',
	LOAD_USER_ERROR = '[User] Load user info failed',

	RESET_CURRENT = '[User] Reset current user model'
};

/**
 * Действие - Загрузка данных пользователя
 * 
 * @export
 * @class LoadUsersSuccess
 * @implements {Action}
 */
export class LoadUser implements Action {
	readonly type: string = UserActionsTypes.LOAD_USER;

	constructor(public payload: number) {}
}

export class LoadTodoUser {
	readonly type: string = UserActionsTypes.LOAD_TODO_USER;

	constructor(public payload: { userId: number; todo: TodoModel; }) {}
}

/**
 * Действие - Загрузка данных пользователя прошлауспешно
 * 
 * @export
 * @class LoadUserSuccess
 * @implements {Action}
 */
export class LoadUserSuccess implements Action {
	readonly type: string = UserActionsTypes.LOAD_USER_SUCCESS;

	constructor(public payload: UserInfoModel) {}
}

/**
 * Действие - Загрузка данных пользователя не удалась
 * 
 * @export
 * @class LoadUserError
 * @implements {Action}
 */
export class LoadUserError implements Action {
	readonly type: string = UserActionsTypes.LOAD_USER_ERROR;

	constructor(public payload: any) {}
}

export class ResetCurrent implements Action {
	readonly type: string = UserActionsTypes.RESET_CURRENT;

	constructor(public payload?: number) {}
}

export type UserActions = LoadUser | LoadUserError | LoadUserSuccess | LoadTodoUser | ResetCurrent;
