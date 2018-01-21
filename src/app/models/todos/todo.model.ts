export interface ITodo {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}

export class TodoModel {
	readonly completed: boolean = null;
	readonly id: number = null;
	readonly title: string = null;
	readonly userId: number = null;

	constructor(private data: ITodo) {
		this.completed = data.completed;
		this.id = data.id;
		this.title = data.title;
		this.userId = data.userId;
	}
}