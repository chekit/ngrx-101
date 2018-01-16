interface ICurrent {
	id: number;
	user: any;
}

export class Todos {
	private current: any = null;
	private filterTag: string = '';

	constructor(private list: any[]) {

	}

	public hasCurrent(): boolean {
		return !!this.current;
	}

	public getTodos(): any[] {
		return this.filterTodoList(this.filterTag, this.list);
	}

	public setCurrent(info: ICurrent): Todos {
		this.current = info;

		return this;
	}

	public getCurrent(): any {
		return this.current;
	}

	public getTagList(): Set<string> {
		const uniqueUsers = new Set<string>();
		this.list.map(t => uniqueUsers.add(`User ${t.userId}`));

		return uniqueUsers;
	}

	public updateTag(tagName: string): void {
		if (this.current && `User ${this.current.user.id}` !== tagName) {
			this.setCurrent(null);
		}

		this.filterTag = tagName;
	}

	private filterTodoList(tagName: string, list: any[]) {
		return !!tagName ? list.filter(t => `User ${t.userId}` === tagName) : list;
	}
}
