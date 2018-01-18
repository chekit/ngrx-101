import { Todo } from '../todos/todo.model';
import { UserModel } from './user.model';

export interface IUserInfo {
	user?: UserModel;
	todos?: Todo[];
}

export class UserInfoModel {
	readonly user: UserModel = null;
	readonly todos: Todo[] = null;

	constructor(private data: IUserInfo) {
		this.user = data.user;
		this.todos = data.todos;
	}
}