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

/**
 * Модель страницы списка заданий
 * 
 * @export
 * @class Todos
 */
export class Todos {
	private current: any = null;
	private filterTag: string = '';

	constructor(private list: ITodo[]) {

	}

	/**
	 * Есть ли просматриваемое задание
	 * 
	 * @returns {boolean} 
	 */
	public hasCurrent(): boolean {
		return !!this.current;
	}

	/**
	 * Список отфильтрованных заданий
	 * 
	 * @returns {ITodo[]} 
	 */
	public getTodos(): ITodo[] {
		return this.filterTodoList(this.filterTag, this.list);
	}

	/**
	 * Устанавливаем активное (просматриваемое) задание
	 * 
	 * @param {ICurrent} info 
	 * @returns {Todos} 
	 */
	public setCurrent(info: ICurrent): Todos {
		this.current = info;

		return this;
	}

	/**
	 * Вовзращает активное задание
	 * 
	 * @returns {ICurrent} 
	 */
	public getCurrent(): ICurrent {
		return this.current;
	}

	/**
	 * Возвращает список тэгов на основе списка заданий
	 * 
	 * @returns {Set<string>} 
	 */
	public getTagList(): Set<string> {
		const uniqueUsers = new Set<string>();
		this.list.map(t => uniqueUsers.add(`User ${t.userId}`));

		return uniqueUsers;
	}

	/**
	 * Обновляем значение активного тэга
	 * 
	 * @param {string} tagName 
	 */
	public updateTag(tagName: string): void {
		if (this.current && `User ${this.current.user.id}` !== tagName) {
			this.setCurrent(null);
		}

		this.filterTag = tagName;
	}

	/**
	 * Фильтр списка заданий по значению тэга
	 * 
	 * @private
	 * @param {string} tagName 
	 * @param {ITodo[]} list 
	 * @returns {ITodo[]} 
	 */
	private filterTodoList(tagName: string, list: ITodo[]): ITodo[] {
		return !!tagName ? list.filter(t => `User ${t.userId}` === tagName) : list;
	}
}
