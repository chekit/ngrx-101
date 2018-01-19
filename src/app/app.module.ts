import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    ComponentsModule,
    StoreModule.forRoot({}) // @TODO: Подклбчение с forFeature
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
