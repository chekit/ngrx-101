import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Todos } from '../../models/todos/todos.model';
import { ICurrentTodo } from '../../components/todos-list/todos-item/todos-item.component';
import { ITodo, Todo } from '../../models/todos/todo.model';
import { UserModel } from '../../models/users/user.model';

@Component({
  selector: 'app-user-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public model: Todos = null;
  public isLoading: boolean = true;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getTodos()
      .subscribe((res: Todo[]) => {
        this.isLoading = false;
        this.model = this.appService.createTodosInstance(res);
      });
  }

  /**
   * Handler события выбора задания
   * 
   * @param {ICurrentTodo} info 
   */
  public onTodoSelect(info: ICurrentTodo): void {
    this.appService.getUser(info.user)
      .subscribe((user: UserModel) => this.model.setCurrent({ user, id: info.todo }));
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
