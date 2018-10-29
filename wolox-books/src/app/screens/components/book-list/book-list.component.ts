import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl:'./book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookList implements OnInit {

  constructor() {}

  @Input() books: any;

  bookSelected(bookId) {
    console.log("hubo un click en el book ID: " + bookId);
  };

  ngOnInit() {};

}
