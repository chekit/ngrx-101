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

  public createUsersInstance(usersList: any[]) {
    return new Users(usersList);
  }

  public createTodosInstance(todosList: any[]) {
    return new Todos(todosList);
  }

  public getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }

  public getUser(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  
  public getUserTodos(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
  }

  public getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
