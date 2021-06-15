import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CatalogModule} from './catalog/catalog.module';
import {HomeModule} from './home/home.module';

import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
const routes :Routes =[
  {
    path:'',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'products',
    component : ProductListComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
