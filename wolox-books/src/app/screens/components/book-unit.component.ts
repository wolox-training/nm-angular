import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'book-unit',
  templateUrl:'./book-unit.component.html',
  styleUrls: ['./book-unit.component.scss']
})

export class BookUnit implements OnInit {

  constructor() {}

  @Input() books: any;

  ngOnInit() {};

}
