import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

import { RegisterComponent }  from './screens/register/register.component';
import { LoginComponent } from './screens/login/login.component';
import { BookListComponent } from './screens/books/book-list/book-list.component';
import { BookDetailComponent } from './screens/books/book-detail/book-detail.component';

const appRoutes: Routes = [
  {
    path:'books',
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [AuthGuard]
      },{
        path: ':id',
        component: BookDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
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
