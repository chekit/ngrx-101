interface ICurrent {
	id: number;
	user: any;
}

export interface ITodo {
	completed: boolean;
	id: number;
	title: number;
	userId: number;
}

export class Todos {
	private current: any = null;
	private filterTag: string = '';

	constructor(private list: ITodo[]) {

	}

	public hasCurrent(): boolean {
		return !!this.current;
	}

	public getTodos(): ITodo[] {
		return this.filterTodoList(this.filterTag, this.list);
	}

	public setCurrent(info: ICurrent): Todos {
		this.current = info;

		return this;
	}

	public getCurrent(): ICurrent {
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

	private filterTodoList(tagName: string, list: ITodo[]): ITodo[] {
		return !!tagName ? list.filter(t => `User ${t.userId}` === tagName) : list;
	}
}
