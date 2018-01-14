import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './users-list/user/user.component';
import { TodoListComponent } from './user-info/todo-list/todo-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TodoComponent } from './user-info/todo-list/todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FilterComponent,
    UsersListComponent,
    UserComponent,
    TodoListComponent,
    UserInfoComponent,
    TodoComponent
  ],
  exports: [
    HeaderComponent,
    FilterComponent,
    UsersListComponent,
    UserInfoComponent
  ]
})
export class ComponentsModule { }
