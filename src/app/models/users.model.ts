interface ICurrent {
	user: any;
	todos: any;
}

export interface IUser {
	address?: any;
	company?: any;
	email: string;
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
}

export class Users {
	private currentUser: ICurrent = null;
	private query: string = '';

	constructor(private list: IUser[]) {}

	public getUsers(): IUser[] {
		return this.filterList(this.query, this.list);
	}

	public getCurrent(): ICurrent {
		return this.currentUser;
	}

	public hasCurrent(): boolean {
		return !!this.currentUser;
	}

	public setCurrent(info: ICurrent): Users {
		this.currentUser = info;

		return this;
	}

	public updateQuery(query: string): Users {
		this.query = query.toLocaleLowerCase();
		this.setCurrent(null);
		
		return this;
	}

	private filterList(query: string, list: IUser[]): IUser[] {
		return !!query ? list.filter(u => u.name.toLowerCase().indexOf(query) > -1) : list;
	}
}
