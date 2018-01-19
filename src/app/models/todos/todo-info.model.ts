import { UserInfoModel } from '../users/user-info.model';
import { UserModel } from '../users/user.model';

export interface ITodoInfoModel {
	id: number;
	user: UserModel;
}

export class TodoInfoModel extends UserInfoModel {
	public readonly id: number = null;

	constructor(data: ITodoInfoModel) {
		super(data);

		this.id = data.id;
	}
}