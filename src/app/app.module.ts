import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MidComponent } from './mid/mid.component';
import { FormComponent } from './form/form.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './config.service';
import {AuthGuardService as AuthGuard} from './auth-guard.service';
import { AlertService} from './_services';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  {path: 'feedback-form', component: FormComponent,
  children: [
    { path: 'form-details', component: FormDetailsComponent }
  ]
  },
  { path: 'check-status', component: MidComponent, canActivate: [AuthGuard] }, // change name here
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/feedback-form', pathMatch: 'full'},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    MidComponent,
    FormComponent,
    FormDetailsComponent,
     LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, ConfigService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
