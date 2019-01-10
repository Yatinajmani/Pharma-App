import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {WelcomepageComponent} from './welcomepage/welcomepage.component';
import {HomeComponent} from './home/home.component';
import {LoginotpComponent} from './loginotp/loginotp.component';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import {MainpageComponent} from './mainpage/mainpage.component';
// import {MainpageComponent} from './mainPage/mainpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'register',component:RegistrationComponent},
  {path: 'Welcome',component:WelcomepageComponent},
  {path: 'login',component:LoginComponent},
  {path:'loginotp',component:LoginotpComponent},
  {path:'passwordforget',component:ForgetpasswordComponent},
  {path:'mainpage',component:MainpageComponent},
  // {path: 'mainPage',component:MainpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
