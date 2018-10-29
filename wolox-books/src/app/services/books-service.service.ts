import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/books';
let headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});
const books = [
  {
    id: "1",
    image_url: "",
    author: "132",
    title: "123"
  },
  {
    id: "2",
    image_url: "",
    author: "132",
    title: "123"
  },
  {
    id: "3",
    image_url: "",
    author: "132",
    title: "123"
  },
  {
    id: "4",
    image_url: "",
    author: "132",
    title: "123"
  },
  {
    id: "5",
    image_url: "",
    author: "132",
    title: "123"
  }
];

@Injectable({
  providedIn: 'root'
})
export class BooksService {

//  constructor(private http: HttpClient) { };
  constructor() { };

  bringAllBooks() {
    //return this.http.get(BASE_URL, { headers })
    return books;
  };
}
