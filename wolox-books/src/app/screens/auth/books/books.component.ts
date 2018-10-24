import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user-service.service';
import { BooksService } from '../../../services/books-service.service';

import { LoginComponent } from '../../../screens/unauth/login/login.component';

let booksToShow = {};

@Component({
  selector: 'app-auth',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})


export class BooksComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private booksService: BooksService ) { }

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  };

  bringBooks() {
    this.booksService.bringAllBooks().subscribe(response => {
      console.log(response);
      booksToShow = response;
    });
  };

  ngOnInit() {
    this.bringBooks();
  };

}
