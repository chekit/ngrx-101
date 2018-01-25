import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { RoutesNames } from './routes.enum';
import { AppService } from '../app.service';

const ROUTES: Routes = [
  {
    path: RoutesNames.USERS,
    component: UsersComponent
  },
  {
    path: RoutesNames.TODOS,
    component: TodosComponent
  }
];

@NgModule({
  providers: [
    AppService
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    TodosComponent, 
    UsersComponent
  ]
})
export class PagesModule { }
