import { UserInfoModel } from '../../../models/users/user-info.model';
import { UserModel } from '../../../models/users/user.model';
import { UserActions, UserActionsTypes } from './../../actions/index';

export interface IUserState {
	data: UserInfoModel;
	loading: boolean;
	loaded: boolean;
}

const initialUserInfo: IUserState = {
	data: null,
	loading: false,
	loaded: false
};

export function reducer(
	state: IUserState = initialUserInfo,
	action: UserActions
) {
	switch (action.type) {
		case UserActionsTypes.LOAD_USER:
			return {
				...state,
				loading: true,
				loaded: false
			};
		case UserActionsTypes.LOAD_TODO_USER:
			return {
				...state,
				loading: true,
				loaded: false
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
		case UserActionsTypes.RESET_CURRENT:
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

export const getData = (state: IUserState) => state.data;
export const getLoading = (state: IUserState) => state.loading;
export const getLoaded = (state: IUserState) => state.loaded;
