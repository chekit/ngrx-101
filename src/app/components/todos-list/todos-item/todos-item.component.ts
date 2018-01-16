import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface ICurrentTodo {
  user: number;
  todo: number;
}

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {
  @Input() model: any;
  @Input() isCurrent: boolean;

  @Output() todoSelected: EventEmitter<ICurrentTodo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectTodo() {
    if (!this.isCurrent) {
      this.todoSelected.emit({ user: this.model.userId, todo: this.model.id });
    }
  }

}
