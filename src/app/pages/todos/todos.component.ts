import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Todos } from '../../models/todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public model: Todos = null;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getTodos()
      .subscribe(res => {
        this.model = this.appService.createTodosInstance(res);
      });
  }

}
