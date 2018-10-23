import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../services/user-service.service';

import { LoginComponent } from '../../screens/login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private userService: UserService, private router: Router ) { }

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  };

  ngOnInit() {};

}
