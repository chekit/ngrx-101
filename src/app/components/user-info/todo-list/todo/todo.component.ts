import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public isComplete = false;

  constructor() { }

  ngOnInit() {
  }

  public switchCompletion(): void {
    this.isComplete = !this.isComplete;
  }
}
