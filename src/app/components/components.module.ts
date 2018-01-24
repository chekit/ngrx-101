import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';
import { UserTodoListComponent } from './user-info/user-todo-list/user-todo-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserTodoComponent } from './user-info/user-todo-list/user-todo/user-todo.component';
import { FormsModule } from '@angular/forms';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosItemComponent } from './todos-list/todos-item/todos-item.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FilterComponent,
    /*** User ***/
    UsersListComponent,
    UserComponent,
    UserTodoListComponent,
    UserInfoComponent,
    UserTodoComponent,
    /*** Todo ***/
    TodosListComponent,
    TodosItemComponent,
    PreloaderComponent
  ],
  exports: [
    HeaderComponent,
    FilterComponent,
    UsersListComponent,
    UserInfoComponent,
    TodosListComponent,
    PreloaderComponent
  ]
})
export class ComponentsModule { }
