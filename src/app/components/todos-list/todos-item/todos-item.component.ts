import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoModel } from '../../../models/todos/todo.model';

export interface ICurrentTodo {
  userId: number;
  id: number;
}

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input() model: TodoModel;
  @Input() isCurrent: boolean;

  @Output() todoSelected: EventEmitter<ICurrentTodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Handler выбора задания
   * 
   */
  public selectTodo() {
    if (!this.isCurrent) {
      this.todoSelected.emit({ userId: this.model.userId, id: this.model.id });
    }
  }

}
