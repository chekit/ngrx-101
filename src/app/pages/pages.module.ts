import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppService } from '../app.service';
import { ComponentsModule } from '../components/components.module';
import { reducers } from '../store/index';
import { RoutesNames } from './routes.enum';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { UserListEffects } from '../store/effects/users/users.effects';
import { UserInfoEffect } from '../store/effects/users/user.effects';
import { TodosListEffect } from '../store/effects/todos/todos.effects';
import { TodosUserInfoEffect } from '../store/effects/todos/user.effects';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }/* ,
  {
    path: RoutesNames.USERS,
    component: UsersComponent
  },
  {
    path: RoutesNames.TODOS,
    component: TodosComponent
  } */
];

@NgModule({
  providers: [
    AppService
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('app', reducers),
    EffectsModule.forFeature([
      UserListEffects,
      UserInfoEffect,
      TodosListEffect,
      TodosUserInfoEffect
    ])
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
