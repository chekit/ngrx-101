import { Action } from '@ngrx/store';
import { UserModel } from '../../../models/users/user.model';
import { UsersModel } from '../../../models/users/users.model';

export enum UsersListActions {
	LOAD_USERS = '[Users] Load users list',
	LOAD_USERS_SUCCESS = '[Users] Load users list succeded',
	LOAD_USERS_ERROR = '[Users] Load users list failed',

	SELECT_USER = '[Users] Select user from list'
}

/**
 * Действие - Загрузка всех пользователей
 * 
 * @export
 * @class LoadUsers
 * @implements {Action}
 */
export class LoadUsers implements Action {
	readonly type: string = UsersListActions.LOAD_USERS;
}

/**
 * Действие - Загрузка всех пользователей прошла успешно
 * 
 * @export
 * @class LoadUsersSuccess
 * @implements {Action}
 */
export class LoadUsersSuccess implements Action {
	readonly type: string = UsersListActions.LOAD_USERS_SUCCESS;
	constructor(public payload: UserModel[]) {}
}

/**
 * Действие - Загрузка всех пользователей не удалась
 * 
 * @export
 * @class LoadUsersError
 * @implements {Action}
 */
export class LoadUsersError implements Action {
	readonly type: string = UsersListActions.LOAD_USERS_ERROR;

	constructor(public payload: any) {}
}

/**
 * Действие - Выбор пользователя
 * 
 * @export
 * @class SelectUser
 * @implements {Action}
 */
export class SelectUser implements Action {
	readonly type: string = UsersListActions.SELECT_USER;

	constructor(public payload: UserModel) {}
}

export type UsersActions = LoadUsers | LoadUsersError | LoadUsersSuccess | SelectUser;
