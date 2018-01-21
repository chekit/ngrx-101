import { UserModel } from '../../../models/users/user.model';
import { UsersActions, UsersListActions } from '../../actions/users/users.action';
import { UsersModel } from '../../../models/users/users.model';
import { UserInfoModel } from '../../../models/users/user-info.model';

export interface UsersListState {
	data: UserModel[];
	loading: boolean;
	loaded: boolean;
}

export const initialUsersState: UsersListState = {
	data: [],
	loading: false,
	loaded: false
};

export function usersListReducer(
	state: UsersListState = initialUsersState,
	action: UsersActions
) {
	switch (action.type) {
		case UsersListActions.LOAD_USERS:
			return {
				...state,
				loading: true
			};
		case UsersListActions.LOAD_USERS_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
				loaded: true
			};
		case UsersListActions.LOAD_USERS_ERROR:
			return {
				...state,
				loading: false,
				loaded: false
			};
		case UsersListActions.SELECT_USER:
			return {
				...state,
				data: state.data.map(u => {
					u['isCurrent'] = u.id === action.payload.id ? true : false;

					return u;
				}),
				loading: false,
				loaded: false
			};
		default:
			return state;
	}
}

export const selectUsersList = (state: UsersListState) => state.data;
export const selectUsersListLoading = (state: UsersListState) => state.loading;
export const selectUsersListLoaded = (state: UsersListState) => state.loaded;
