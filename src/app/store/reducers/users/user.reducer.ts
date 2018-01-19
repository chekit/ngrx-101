import { UserInfoModel } from '../../../models/users/user-info.model';
import { UserModel } from '../../../models/users/user.model';
import { UserActions, UserActionsTypes } from '../../actions/users/user.actions';


export interface UserState {
	data: UserInfoModel;
	loading: boolean;
	loaded: boolean;
}

const initialUserInfo: UserState = {
	data: new UserInfoModel({
		user: new UserModel({
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
		}),
		todos: []
	}),
	loading: false,
	loaded: false
};

export function userReducer(
	state: UserState = initialUserInfo,
	action: UserActions
) {
	switch (action.type) {
		case UserActionsTypes.LOAD_USER:
			return {
				...state,
				loading: true
			};
		case UserActionsTypes.LOAD_USER_SUCCESS:
			return {
				...state,
				loading: false,
				loaded: true
			};
		default:
			return state;
	}
}

export const selectUserInfo = (state: UserState) => state.data;
