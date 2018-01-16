import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-todo-list',
  templateUrl: './user-todo-list.component.html',
  styleUrls: ['./user-todo-list.component.scss']
})
export class UserTodoListComponent implements OnInit {
  @Input() public model: any;
  
  constructor() { }

  ngOnInit() {
  }

  public trackById(index: number, todo: any): number {
    return todo.id;
  }
}
