import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from '../../../models/todos/todo.model';

@Component({
  selector: 'app-user-todo-list',
  templateUrl: './user-todo-list.component.html',
  styleUrls: ['./user-todo-list.component.scss']
})
export class UserTodoListComponent implements OnInit {
  @Input() public model: TodoModel;
  
  constructor() { }

  ngOnInit() {
  }

  public trackById(index: number, todo: TodoModel): number {
    return todo.id;
  }
}
