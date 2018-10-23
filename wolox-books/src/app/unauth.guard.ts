import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from './services/user-service.service';

@Injectable({
  providedIn: 'root'
})

export class UnauthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router ) { }

  canActivate() {
    if (!this.userService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['books']);
      return false;
    }
  };
}
