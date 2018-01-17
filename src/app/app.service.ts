import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './models/users.model';
import { Todos } from './models/todos.model';
import { Observable } from 'rxjs/Observable';

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
    return new Users(usersList);
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
  public getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }

  /**
   * Получает данные по конкретному пользователю
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   */
  public getUser(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
  /**
   * Получает список дел конкретного пользователя
   * 
   * @param {number} id 
   * @returns {Observable<any>} 
   */
  public getUserTodos(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  }

  /**
   * Возваращет список всех дел
   * 
   * @returns {Observable<any>} 
   */
  public getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
