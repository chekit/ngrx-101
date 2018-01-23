import { UserInfoModel } from '../../../models/users/user-info.model';
import { UserModel } from '../../../models/users/user.model';
import { UserActions, UserActionsTypes } from '../../actions/users/user.actions';


export interface UserState {
	data: UserInfoModel;
	loading: boolean;
	loaded: boolean;
}

const initialUserInfo: UserState = {
	data: null,
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
			const data = action.payload;

			return {
				...state,
				data,
				loading: false,
				loaded: true
			};
		case UserActionsTypes.LOAD_USER_ERROR:
			return {
				...state,
				data: null,
				loading: false,
				loaded: false
			};
		default:
			return state;
	}
}

export const selectUserInfo = (state: UserState) => state.data;
export const selectUserLoading = (state: UserState) => state.loading;
export const selectUserLoaded = (state: UserState) => state.loaded;
