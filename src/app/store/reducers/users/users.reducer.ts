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
	loading: false,
	loaded: false
};

export function usersListReducer(
	state: UsersListState = initialUsersState,
	action: any/* UsersActions */
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
				data: state.data.map(u => {
					u['isCurrent'] = u.id === action.payload.user.id ?  true : false;

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
