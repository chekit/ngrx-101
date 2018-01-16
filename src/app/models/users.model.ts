interface ICurrent {
	user: any;
	todos: any;
}

export class Users {
	private currentUser: any = null;
	private query: string = '';

	constructor(private list: any[]) {}

	public getUsers(): any[] {
		return this.filterList(this.query, this.list);
	}

	public getCurrent(): any {
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

	private filterList(query, list) {
		return !!query ? list.filter(u => u.name.toLowerCase().indexOf(query) > -1) : list;
	}
}
