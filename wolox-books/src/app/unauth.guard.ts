import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UserService } from './services/user-service.service';

@Injectable({
  providedIn: 'root'
})

export class UnauthGuard implements CanActivate {

  constructor(private userService: UserService ) { }

  canActivate() {
    return this.userService.checkUserState(!this.userService.loggedIn(), 'books');
  };
}
