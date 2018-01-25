import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { RoutesNames } from './pages/routes.enum';


const ROUTES: Routes = [
  {
    path: '',
    redirectTo: RoutesNames.USERS,
    pathMatch: 'full'
  },
  {
    path: RoutesNames.USERS,
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    ComponentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
