import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppService } from '../../../app.service';
import { TodoModel } from '../../../models/todos/todo.model';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { TodosListActions, LoadTodosSuccess, LoadTodosError } from '../../actions/index';

@Injectable()
export class TodosListEffect {
	@Effect()
	public todoList$ = this.actions$.ofType(TodosListActions.LOAD_TODOS)
		.pipe(
			switchMap(
				() => this.appService.getTodos()
					.pipe(
						map((todos: TodoModel[]) => new LoadTodosSuccess(todos)),
						catchError(error => of(new LoadTodosError(error)))
					)
			)
		);

	constructor(
		private appService: AppService,
		private actions$: Actions
	) {}
}