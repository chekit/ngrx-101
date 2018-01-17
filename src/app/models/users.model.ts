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

/**
 * Модель страницы пользователей
 * 
 * @export
 * @class Users
 */
export class Users {
	private currentUser: ICurrent = null;
	private query: string = '';

	constructor(private list: IUser[]) {}

	/**
	 * Список отфильтрованных пользователей
	 * 
	 * @returns {IUser[]} 
	 */
	public getUsers(): IUser[] {
		return this.filterList(this.query, this.list);
	}

	/**
	 * Возвращает просматриваемого пользователя
	 * 
	 * @returns {ICurrent} 
	 */
	public getCurrent(): ICurrent {
		return this.currentUser;
	}

	/**
	 * Есть ли просматриваемый пользователь
	 * 
	 * @returns {boolean} 
	 */
	public hasCurrent(): boolean {
		return !!this.currentUser;
	}

	/**
	 * Устанавливает просматриваемого пользователя
	 * 
	 * @param {ICurrent} info 
	 * @returns {Users} 
	 */
	public setCurrent(info: ICurrent): Users {
		this.currentUser = info;

		return this;
	}

	/**
	 * Обновляет значение запроса фильтра
	 * 
	 * @param {string} query 
	 * @returns {Users} 
	 */
	public updateQuery(query: string): Users {
		this.query = query.toLocaleLowerCase();
		this.setCurrent(null);
		
		return this;
	}

	/**
	 * Фильтрует список пациентов по поисковому запросу
	 * 
	 * @private
	 * @param {string} query 
	 * @param {IUser[]} list 
	 * @returns {IUser[]} 
	 */
	private filterList(query: string, list: IUser[]): IUser[] {
		return !!query ? list.filter(u => u.name.toLowerCase().indexOf(query) > -1) : list;
	}
}
