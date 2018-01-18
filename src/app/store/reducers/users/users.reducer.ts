import { UserModel } from '../../../models/users/user.model';

export interface UsersState {
	users: UserModel[];
	loading: boolean;
	loaded: boolean;
}

export const initialUsersState: UsersState = {
	users: [],
	loading: false,
	loaded: false
};