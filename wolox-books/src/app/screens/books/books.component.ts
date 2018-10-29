import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../services/user-service.service';
import { LoginComponent } from '../../screens/login/login.component';
import { BooksService } from '../../services/books-service.service';
import { BookList } from '../../screens/components/book-list/book-list.component';
import { BookDetail } from '../../screens/components/book-detail/book-detail.component';

@Component({
  selector: 'app-auth',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})

export class BooksComponent implements OnInit {

  booksToShow: any;
  showBooksList: boolean = false;

  constructor(private userService: UserService, private router: Router, private booksService: BooksService ) { }

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['login']);
  };

  bringBooks() {
//    this.booksService.bringAllBooks().subscribe(response => {
//this.booksToShow = response;
//});
    this.booksToShow = this.booksService.bringAllBooks();
  };

  ngOnInit() {
    this.bringBooks();
  };

}
