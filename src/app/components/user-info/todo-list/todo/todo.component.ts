import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public isComplete = false;

  @Input() public model: any;

  constructor() { }

  ngOnInit() {
    this.isComplete = this.model.completed;
  }

  public switchCompletion(): void {
    this.isComplete = !this.isComplete;
  }
}
