import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICurrentTodo } from './todos-item/todos-item.component';
import { TodosModel } from '../../models/todos/todos.model';
import { TodoModel } from '../../models/todos/todo.model';

@Component({
  selector: 'app-user-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
  @Input() public model: TodoModel[];

  @Output() selectTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public trackById(index: number, item: any): number {
    return item.id;
  } 

  /**
   * Handler события выбора задания
   * 
   * @param {ICurrentTodo} $event 
   */
  public onTodoSelected($event: ICurrentTodo) {
    this.selectTodo.emit($event);
  }
}
