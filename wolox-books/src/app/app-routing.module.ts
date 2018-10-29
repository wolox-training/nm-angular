import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }  from './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';

const appRoutes: Routes = [
  {
    path: 'sign-up',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
