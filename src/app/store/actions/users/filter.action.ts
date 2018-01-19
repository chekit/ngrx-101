import { Action } from '@ngrx/store';

export const enum FilterActionsTypes {
	FILTER_USERS = '[Users] Filter users list',
	FILTER_USERS_SUCCESS = '[Users] Filter users list suceeded',
	FILTER_USERS_ERROR = '[Users] Filter users list failed'
}

export class FilterUser implements Action {
	readonly type: string = FilterActionsTypes.FILTER_USERS;

	constructor(public payload: any) {

	}
}

export class FilterUserSuccess implements Action {
	readonly type: string = FilterActionsTypes.FILTER_USERS_SUCCESS;
}

export class FilterUserError implements Action {
	readonly type: string = FilterActionsTypes.FILTER_USERS_ERROR;
}

export type FilterActions = FilterUser | FilterUserSuccess | FilterUserError;
