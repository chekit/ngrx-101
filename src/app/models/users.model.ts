interface ICurrent {
	user: any;
	todos: any;
}

export class Users {
	private currentUser: any = null;

	constructor(private list: any[]) {

	}

	public getUsers(): any[] {
		return this.list;
	}

	public getCurrent(): any {
		return this.currentUser;
	}

	public hasCurrent(): boolean {
		return !!this.currentUser;
	}

	public addCurrent(info: ICurrent): Users {
		this.currentUser = info;

		return this;
	}
}
