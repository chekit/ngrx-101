import { UserModel } from '../users/user.model';
import { TodoModel } from './todo.model';

interface ICurrentTodo {
	id: number;
	user: UserModel;
}

/**
 * Модель страницы списка заданий
 * 
 * @export
 * @class Todos
 */
export class TodosModel {
	private current: ICurrentTodo = null;
	private filterTag: string = '';

	constructor(private list: TodoModel[]) {

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
	 * @returns {TodoModel[]} 
	 */
	public getTodos(): TodoModel[] {
		return this.filterTodoList(this.filterTag, this.list);
	}

	/**
	 * Устанавливаем активное (просматриваемое) задание
	 * 
	 * @param {ICurrentTodo} info 
	 * @returns {TodosModel} 
	 */
	public setCurrent(info: ICurrentTodo): TodosModel {
		this.current = info;

		return this;
	}

	/**
	 * Вовзращает активное задание
	 * 
	 * @returns {ICurrentTodo} 
	 */
	public getCurrent(): ICurrentTodo {
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
	 * @param {TodoModel[]} list 
	 * @returns {TodoModel[]} 
	 */
	private filterTodoList(tagName: string, list: TodoModel[]): TodoModel[] {
		return !!tagName ? list.filter(t => `User ${t.userId}` === tagName) : list;
	}
}
