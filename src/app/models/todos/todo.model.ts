export interface ITodo {
	completed: boolean;
	id: number;
	title: number;
	userId: number;
}

export class Todo {
	readonly completed: boolean = null;
	readonly id: number = null;
	readonly title: number = null;
	readonly userId: number = null;

	constructor(private data: ITodo) {
		this.completed = data.completed;
		this.id = data.id;
		this.title = data.title;
		this.userId = data.userId;
	}
}