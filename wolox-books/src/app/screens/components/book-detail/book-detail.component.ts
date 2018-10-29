import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'book-detail',
  templateUrl:'./book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})

export class BookDetail implements OnInit {

  book: any;

  constructor() {};

  const book = {
    image_url: "https://via.placeholder.com/150",
    title: "Bella y graciosa mosa",
    gender: "Ficción",
    author: "J K Rowling",
    publisher: "Santillana",
    year: "1999"
  };


  /*@Input() books: any;

  bookSelected(bookId) {
    console.log("hubo un click en el book ID: " + bookId);
  };*/

  ngOnInit() {};

}
