import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppService } from '../app.service';
import { ComponentsModule } from '../components/components.module';
import { reducers } from '../store/index';
import { RoutesNames } from './routes.enum';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

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
    ComponentsModule,
    StoreModule.forFeature('users', reducers)
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
