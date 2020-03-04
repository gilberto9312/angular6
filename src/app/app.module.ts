import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  {path: '', component : AppComponent},
  {path: 'login', component : LoginComponent}

  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
