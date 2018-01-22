import { Action } from '@ngrx/store';
import { TodoModel } from '../../../models/todos/todo.model';
import { ICurrentTodo } from '../../../components/todos-list/todos-item/todos-item.component';

export enum TodosListActions {
	LOAD_TODOS = '[Todos] Load todos list',
	LOAD_TODOS_ERROR = '[Todos] Load todos list failed',
	LOAD_TODOS_SUCCESS = '[Todos] Load todos list succeded',

	SELECT_TODO = '[Todos] Select todo from list',

	FILTER_TODOS = '[Todos] Filter todoslist'
};

/**
 * Действие - Загрузка всех задач
 * 
 * @export
 * @class LoadTodos
 * @implements {Action}
 */
export class LoadTodos implements Action {
	readonly type: string = TodosListActions.LOAD_TODOS;

	constructor(public payload: any = null) {}
}

/**
 * Действие - Загрузка всех задач не удалась
 * 
 * @export
 * @class LoadTodosError
 * @implements {Action}
 */
export class LoadTodosError implements Action {
	readonly type: string = TodosListActions.LOAD_TODOS_ERROR;

	constructor(public payload: any) {}
}

/**
 * Действие - Загрузка всех задач удалась
 * 
 * @export
 * @class LoadTodosSuccess
 * @implements {Action}
 */
export class LoadTodosSuccess implements Action {
	readonly type: string = TodosListActions.LOAD_TODOS_SUCCESS;

	constructor(public payload: any) {}
}

export class SelectTodo implements Action {
	readonly type: string = TodosListActions.SELECT_TODO;

	constructor(public payload: ICurrentTodo) {}
}

export class FilterTodos implements Action {
	readonly type: string = TodosListActions.FILTER_TODOS;

	constructor(public payload: string) {}
}

export type TodosActions = LoadTodos | LoadTodosError | LoadTodosSuccess | SelectTodo | FilterTodos;
