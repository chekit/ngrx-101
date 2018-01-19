import { UserModel } from '../../../models/users/user.model';
import { UsersActions, UsersListActions } from '../../actions/users/users.action';
import { UsersModel } from '../../../models/users/users.model';
import { UserInfoModel } from '../../../models/users/user-info.model';

export interface UsersPageState {
	data: UserModel[];
	// current: UserInfoModel;
	// query: string;
	loading: boolean;
	loaded: boolean;
}

export const initialUsersState: UsersPageState = {
	data: [
		(new UserModel({
			'id': 1,
			'name': 'Leanne Graham',
			'username': 'Bret',
			'email': 'Sincere@april.biz',
			'address': {
			  'street': 'Kulas Light',
			  'suite': 'Apt. 556',
			  'city': 'Gwenborough',
			  'zipcode': '92998-3874',
			  'geo': {
				'lat': '-37.3159',
				'lng': '81.1496'
			  }
			},
			'phone': '1-770-736-8031 x56442',
			'website': 'hildegard.org',
			'company': {
			  'name': 'Romaguera-Crona',
			  'catchPhrase': 'Multi-layered client-server neural-net',
			  'bs': 'harness real-time e-markets'
			}
		}))
	],
	// current: null,
	// query: '',
	loading: false,
	loaded: false
};

export function usersReducer(
	state: UsersPageState = initialUsersState,
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
				// users: action.payload,
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
				// current: action.payload,
				loading: false,
				loaded: false
			};
		default:
			return state;
	}
}

export const selectUsers = (state: UsersPageState) => state.data;
export const selectUsersLoading = (state: UsersPageState) => state.loading;
export const selectUsersLoaded = (state: UsersPageState) => state.loaded;
// export const selectCurrent = (state: UsersPageState) => state.current;
// export const selectQuery = (state: UsersPageState) => state.query;
