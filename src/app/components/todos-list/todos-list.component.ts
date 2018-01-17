import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICurrentTodo } from './todos-item/todos-item.component';
import { Todos } from '../../models/todos.model';

@Component({
  selector: 'app-user-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  @Input() model: Todos[];
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
