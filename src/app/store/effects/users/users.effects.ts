import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators/switchMap';
import { AppService } from '../../../app.service';
import { UserModel } from '../../../models/users/user.model';
import { LoadUserError, UserActionsTypes } from '../../actions/users/user.actions';
import { LoadUsersSuccess, UsersListActions } from '../../actions/users/users.action';

@Injectable()
export class UserListEffects {
	@Effect()
	public loadUsers$ = this.actions$.ofType(UsersListActions.LOAD_USERS)
		.pipe(
			switchMap(() => this.appService
				.getUsers()
				.pipe(
					map((users: UserModel[]) => (new LoadUsersSuccess(users))),
					catchError(err => of(new LoadUserError(err)))
				)
			)
		)

	constructor(
		private actions$: Actions,
		private appService: AppService
	) {}
}