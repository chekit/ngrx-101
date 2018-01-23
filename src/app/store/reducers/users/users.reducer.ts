import { UserModel } from '../../../models/users/user.model';
import { UsersActions, UsersListActions } from '../../actions/users/users.action';
import { UsersModel } from '../../../models/users/users.model';
import { UserInfoModel } from '../../../models/users/user-info.model';

export interface UsersListState {
	data: UserModel[];
	query: string;
	loading: boolean;
	loaded: boolean;
}

export const initialUsersListState: UsersListState = {
	data: [],
	query: '',
	loading: false,
	loaded: false
};

let cacheUsersList: UserModel[] = [];

export function reducer(
	state = initialUsersListState,
	action: UsersActions
) {
	switch (action.type) {
		case UsersListActions.LOAD_USERS:
			return {
				...state,
				loading: true
			};
		case UsersListActions.LOAD_USERS_SUCCESS:
			cacheUsersList = [...action.payload];

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
		case UsersListActions.FILTER_USERS:
			const query = action.payload.toLowerCase().trim();
			const filtered = cacheUsersList.filter(u => u.name.toLowerCase().indexOf(query) > -1);

			return {
				...state,
				data: filtered,
				query,
				loading: false,
				loaded: true
			};
		default:
			return state;
	}
}

export const getData = (state: UsersListState) => state.data;
export const getQuery = (state: UsersListState) => state.query;
export const getLoading = (state: UsersListState) => state.loading;
export const getLoaded = (state: UsersListState) => state.loaded;
