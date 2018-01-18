import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from './models/users/users.model';
import { Todos } from './models/todos/todos.model';
import { Observable } from 'rxjs/Observable';
import { ITodo, Todo } from './models/todos/todo.model';
import { IUser, UserModel } from './models/users/user.model';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Возвращает экземпляр модели страницы пользователей
   * 
   * @param {any[]} usersList 
   * @returns 
   */
  public createUsersInstance(usersList: any[]) {
    return new UsersModel(usersList);
  }

  /**
   * Возвращает экземпляр модели страницы списка дел
   * 
   * @param {any[]} todosList 
   * @returns 
   */
  public createTodosInstance(todosList: any[]) {
    return new Todos(todosList);
  }

  /**
   * Получает список пользователей
   * 
   * @returns {Observable<any>} 
   */
  public getUsers(): Observable<UserModel[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/')
      .map((res: IUser[]) => res.map(i => (new UserModel(i))));
  }

  /**
   * Получает данные по конкретному пользователю
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   */
  public getUser(id: number): Observable<UserModel> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .map((res: IUser) => (new UserModel(res)));
  }
  
  /**
   * Получает список дел конкретного пользователя
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   */
  public getUserTodos(id: number): Observable<Todo[]> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .map((res: ITodo[]) => res.map(i => (new Todo(i))));
  }

  /**
   * Возваращет список всех дел
   * 
   * @returns {Observable<any>} 
   */
  public getTodos(): Observable<Todo[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/')
      .map((res: ITodo[]) => res.map(i => (new Todo(i))));
  }
}
