import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { ICurrentTodo } from '../../components/todos-list/todos-item/todos-item.component';
import { TodoInfoModel } from '../../models/todos/todo-info.model';
import { ITodo, TodoModel } from '../../models/todos/todo.model';
import { TodosModel } from '../../models/todos/todos.model';
import { UserModel } from '../../models/users/user.model';
import { LoadTodos, SelectTodo } from '../../store/actions/todos/todos.action';
import { LoadTodoUser, LoadUser } from '../../store/actions/users/user.actions';
import { getAllTodos, getCurrentUser, getTodosListLoaded, getTodosListLoading } from '../../store/index';
import { ITodosState } from '../../store/reducers/todos/todos.reducer';

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
    private store: Store<ITodosState>
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
