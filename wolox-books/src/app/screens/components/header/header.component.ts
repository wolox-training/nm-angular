import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user-service.service';
import { LoginComponent } from '../../../screens/login/login.component';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router ) { }

  directToDashboard() {
    this.router.navigate(['books']);
  };

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  };

  ngOnInit() {};

}
