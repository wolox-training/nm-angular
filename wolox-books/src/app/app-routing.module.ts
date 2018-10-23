import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

import { RegisterComponent }  from './screens/unauth/register/register.component';
import { LoginComponent } from './screens/unauth/login/login.component';
import { BooksComponent } from './screens/auth/books/books.component';

const appRoutes: Routes = [
  {
    path:'books',
    component: BooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterComponent,
        canActivate: [UnauthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [UnauthGuard]
      }
    ]
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
