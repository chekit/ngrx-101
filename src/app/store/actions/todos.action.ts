import { Action } from '@ngrx/store';

export enum UsersListActions {
	LOAD_TODOS = '[Todos] Load users list',
	LOAD_TODOS_ERROR = '[Todos] Load users list failed',
	LOAD_TODOS_SUCCESS = '[Todos] Load users list succeded'
};

export class LoadTodos implements Action {
	readonly type: string = UsersListActions.LOAD_TODOS;
}

export class LoadTodosError implements Action {
	readonly type: string = UsersListActions.LOAD_TODOS_ERROR;

	constructor(public payload: any) {}
}

export class LoadTodosSuccess implements Action {
	readonly type: string = UsersListActions.LOAD_TODOS_SUCCESS;

	constructor(public payload: any) {}
}

export type TodosActions = LoadTodos | LoadTodosError | LoadTodosSuccess;