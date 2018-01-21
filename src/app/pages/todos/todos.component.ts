import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { TodosModel } from '../../models/todos/todos.model';
import { ICurrentTodo } from '../../components/todos-list/todos-item/todos-item.component';
import { ITodo, TodoModel } from '../../models/todos/todo.model';
import { UserModel } from '../../models/users/user.model';
import { TodoInfoModel } from '../../models/todos/todo-info.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ITodosPageState } from '../../store/reducers/todos/index';
import { getAllTodos, getTodosListLoading, getTodosListLoaded, getCurrentUser } from '../../store/index';
import { LoadTodos, SelectTodo } from '../../store/actions/todos/todos.action';
import { LoadUser, LoadTodoUser } from '../../store/actions/users/user.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public model: any = null;

  public todos$: Observable<TodoModel[]>;
  public loading$: Observable<boolean>;
  public loaded$: Observable<boolean>;
  public current$: any;

  constructor(
    private appService: AppService,
    private store: Store<ITodosPageState>
  ) {
    this.todos$ = this.store.select<any>(getAllTodos);
    this.current$ = this.store.select<any>(getCurrentUser);
    this.loading$ = this.store.select<any>(getTodosListLoading);
    this.loaded$ = this.store.select<any>(getTodosListLoaded);
  }

  ngOnInit() {
    this.store.dispatch(new LoadTodos());
  }

  /**
   * Handler события выбора задания
   * 
   * @param {ICurrentTodo} info 
   */
  public onTodoSelect(selected: ICurrentTodo): void {
    this.store.dispatch(new SelectTodo(selected));
    this.store.dispatch(new LoadTodoUser({ id: selected.userId }));
  }

  /**
   * Handler события фильтрации списка
   * 
   * @param {string} tag 
   */
  public onFilterTodosList(tag: string): void {
    this.model.updateTag(tag);
  }
}
