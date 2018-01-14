import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { RoutesNames } from './routes.enum';
import { AppService } from '../app.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesNames.USERS,
    pathMatch: 'full'
  },
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
    RouterModule.forRoot(routes),
    CommonModule,
    ComponentsModule
  ],
  declarations: [
    TodosComponent, 
    UsersComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
