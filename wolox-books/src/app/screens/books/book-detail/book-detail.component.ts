import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component'
import { BooksService } from '../../../services/books-service.service';

@Component({
  selector: 'book-detail',
  templateUrl:'./book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})

export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private route: ActivatedRoute, private booksService: BooksService) {};

  bookSelected(bookId) {
    this.booksService.bringBookDetail(bookId).subscribe(response => {
      this.book = response;
    });
  };

  ngOnInit() {
    this.bookSelected(this.route.snapshot.params.id);
  };

}
