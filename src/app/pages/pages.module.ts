import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppService } from '../app.service';
import { ComponentsModule } from '../components/components.module';
import { TodosListEffect } from '../store/effects/todos/todos.effects';
import { TodosUserInfoEffect } from '../store/effects/todos/user.effects';
import { UserInfoEffect } from '../store/effects/users/user.effects';
import { UserListEffects } from '../store/effects/users/users.effects';
import { reducers } from '../store/index';
import { RoutesNames } from './routes.enum';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

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
  ]
})
export class PagesModule { }
