import { UserModel } from './user.model';
import { UserInfoModel } from './user-info.model';

/**
 * Модель страницы пользователей
 * 
 * @export
 * @class Users
 */
export class UsersModel {
	private currentUser: UserInfoModel = null;
	private query: string = '';

	constructor(private list: UserModel[]) {}

	/**
	 * Список отфильтрованных пользователей
	 * 
	 * @returns {IUser[]} 
	 */
	public getUsers(): UserModel[] {
		return this.filterList(this.query, this.list);
	}

	/**
	 * Возвращает просматриваемого пользователя
	 * 
	 * @returns {ICurrent} 
	 */
	public getCurrent(): UserInfoModel {
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
	public setCurrent(info: UserInfoModel): UsersModel {
		this.currentUser = info;

		return this;
	}

	/**
	 * Обновляет значение запроса фильтра
	 * 
	 * @param {string} query 
	 * @returns {Users} 
	 */
	public updateQuery(query: string): UsersModel {
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
	private filterList(query: string, list: UserModel[]): UserModel[] {
		return !!query ? list.filter(u => u.name.toLowerCase().indexOf(query) > -1) : list;
	}
}
