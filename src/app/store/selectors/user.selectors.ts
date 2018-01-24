import { createSelector } from '@ngrx/store';
import * as fromReducers from './../reducers';
import * as fromUserReducer from './../reducers/current/user.reducer';

/*** Получаем состояние выбранного пользователя ***/
export const selectCurrentUserState = createSelector(
	fromReducers.selectAppState,
	(state: fromReducers.IAppState) => state.current
);

export const selectCurrentUser = createSelector(selectCurrentUserState, fromUserReducer.getData);
export const selectCurrentUserLoading = createSelector(selectCurrentUserState, fromUserReducer.getLoading);
export const selectCurrentUserLoaded = createSelector(selectCurrentUserState, fromUserReducer.getLoaded);