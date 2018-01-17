import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss']
})
export class UserTodoComponent implements OnInit {
  public isComplete = false;

  @Input() public model: any;

  constructor() { }

  ngOnInit() {
    this.isComplete = this.model.completed;
  }

  /**
   * Переключатель статуса задания
   * 
   */
  public switchCompletion(): void {
    this.isComplete = !this.isComplete;
  }
}
