import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { ICurrentTodo } from '../../components/todos-list/todos-item/todos-item.component';
import { TodoInfoModel } from '../../models/todos/todo-info.model';
import { ITodo, TodoModel } from '../../models/todos/todo.model';
import { TodosModel } from '../../models/todos/todos.model';
import { UserInfoModel } from '../../models/users/user-info.model';
import { UserModel } from '../../models/users/user.model';

import * as fromStore from '../../store/index';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  public todos$: Observable<TodoModel[]>;
  public loadingTodos$: Observable<boolean>;
  public loadedTodos$: Observable<boolean>;

  public tags$: Observable<Set<string>>;

  public current$: Observable<UserInfoModel>;
  public loadingCurrent$: Observable<boolean>;
  public loadedCurrent$: Observable<boolean>;

  public filterSubject$ = new Subject<string>();

  private sub: Subscription = null;

  constructor(
    private appService: AppService,
    private store: Store<fromStore.IAppState>
  ) {
    this.todos$ = this.store.select<any>(fromStore.selectAllTodos);
    this.loadingTodos$ = this.store.select<any>(fromStore.selectTodosListLoading);
    this.loadedTodos$ = this.store.select<any>(fromStore.selectTodosListLoaded);

    this.tags$ = this.store.select<any>(fromStore.selectAllTodosTags);

    this.current$ = this.store.select<any>(fromStore.selectCurrentUser);
    this.loadingCurrent$ = this.store.select<any>(fromStore.selectCurrentUserLoading);
    this.loadedCurrent$ = this.store.select<any>(fromStore.selectCurrentUserLoaded);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTodos());
    this.store.dispatch(new fromStore.ResetCurrent());

    this.sub = this.filterSubject$
      .subscribe((tag: string) => {
        this.store.dispatch(new fromStore.FilterTodos(tag));
        this.store.dispatch(new fromStore.ResetCurrent());
      });
  }

  ngOnDestroy() {
    this.filterSubject$.unsubscribe();
  }

  /**
   * Handler события выбора задания
   * 
   * @param {ICurrentTodo} info 
   */
  public onTodoSelect(selected: TodoModel): void {
    this.store.dispatch(new fromStore.LoadTodoUser({userId: selected.userId, todo: selected}));
  }
}
