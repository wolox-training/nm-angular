import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user-service.service';

import { LoginComponent } from '../../../screens/unauth/login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private userService: UserService, private router: Router ) { }

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  };

  ngOnInit() {};

}
