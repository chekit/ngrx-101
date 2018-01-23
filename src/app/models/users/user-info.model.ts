import { TodoModel } from '../todos/todo.model';
import { UserModel } from './user.model';

export interface IUserInfo {
	user?: UserModel;
	todo?: TodoModel;
	todos?: TodoModel[];
}

export class UserInfoModel {
	readonly user: UserModel = null;
	readonly todo: TodoModel = null;
	readonly todos: TodoModel[] = null;

	constructor(private data: IUserInfo) {
		this.user = data.user;
		this.todo = data.todo;
		this.todos = data.todos;
	}
}