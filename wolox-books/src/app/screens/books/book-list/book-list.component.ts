import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component'
import { BooksService } from '../../../services/books-service.service';

@Component({
  selector: 'book-list',
  templateUrl:'./book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {

  booksToShow: any;

  constructor(private booksService: BooksService, private router: Router) {}

  bringBooks() {
    this.booksService.bringAllBooks().subscribe(response => {
      this.booksToShow = response;
    });
  };

  ngOnInit() {
    this.bringBooks();
  };

}
