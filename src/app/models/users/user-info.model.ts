import { TodoModel } from '../todos/todo.model';
import { UserModel } from './user.model';

export interface IUserInfo {
	user?: UserModel;
	todos?: TodoModel[];
}

export class UserInfoModel {
	readonly user: UserModel = null;
	readonly todos: TodoModel[] = null;

	constructor(private data: IUserInfo) {
		this.user = data.user;
		this.todos = data.todos;
	}
}