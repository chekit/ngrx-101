import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { storeFreeze } from 'ngrx-store-freeze';
import { RouterModule, Routes } from '@angular/router';

const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'users'
//   },
//   {
//     path: 'users',
//     loadChildren: './pages/pages.module.ts#PagesModule'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    ComponentsModule,
    // RouterModule.forRoot(routes),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
