export class Todos {
	constructor(private list: any[]) {

	}

	public getTodos(): any[] {
		return this.list;
	}
}
