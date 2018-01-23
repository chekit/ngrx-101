import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppService } from '../../../app.service';
import { UserActionsTypes, LoadUserError, LoadUserSuccess } from '../../actions/users/user.actions';
import { Observable } from 'rxjs/Observable';
import { UserInfoModel } from '../../../models/users/user-info.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { switchMap } from 'rxjs/operators/switchMap';
import { UserModel } from '../../../models/users/user.model';
import { TodoModel } from '../../../models/todos/todo.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodosUserInfoEffect {
	@Effect()
	public loadUserEffect$ = this.actions$.ofType(UserActionsTypes.LOAD_TODO_USER)
		.pipe(
			switchMap((action: any) => {
				return this.appService.getUser(action.payload.userId)
					.pipe(
						map((user: UserModel) => new UserInfoModel({ user, todo: action.payload.todo })),
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