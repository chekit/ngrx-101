import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppService } from '../../../app.service';
import { Observable } from 'rxjs/Observable';
import { UserInfoModel } from '../../../models/users/user-info.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { switchMap } from 'rxjs/operators/switchMap';
import { UserModel } from '../../../models/users/user.model';
import { TodoModel } from '../../../models/todos/todo.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { UserActionsTypes, LoadUserSuccess, LoadUserError } from '../../actions/index';

@Injectable()
export class UserInfoEffect {
	@Effect()
	public loadUserEffect$ = this.actions$.ofType(UserActionsTypes.LOAD_USER)
		.pipe(
			switchMap((action: any) => {
				return forkJoin(
					this.appService.getUser(action.payload),
					this.appService.getUserTodos(action.payload)
				)
					.pipe(
						map((res: [UserModel, TodoModel[]]) => new UserInfoModel({ user: res[0], todos: res[1] })),
						map(res => new LoadUserSuccess(res)),
						catchError(error => of(new LoadUserError(error)))
					);
			})
		);

	constructor(
		private actions$: Actions,
		private appService: AppService
	) {	}
}