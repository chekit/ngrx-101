import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppService } from '../app.service';
import { ComponentsModule } from '../components/components.module';
import * as fromStore from './../store';
import { RoutesNames } from './routes.enum';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';


const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesNames.USERS
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
    CommonModule,
    ComponentsModule,

    RouterModule.forChild(ROUTES),

    StoreModule.forFeature('app', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects)
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
