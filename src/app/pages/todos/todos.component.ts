import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { TodosModel } from '../../models/todos/todos.model';
import { ICurrentTodo } from '../../components/todos-list/todos-item/todos-item.component';
import { ITodo, TodoModel } from '../../models/todos/todo.model';
import { UserModel } from '../../models/users/user.model';
import { TodoInfoModel } from '../../models/todos/todo-info.model';

@Component({
  selector: 'app-user-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public model: TodosModel = null;
  public isLoading: boolean = true;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getTodos()
      .subscribe((res: TodoModel[]) => {
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
      .subscribe((user: UserModel) => this.model.setCurrent(new TodoInfoModel({ user, id: info.todo })));
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
