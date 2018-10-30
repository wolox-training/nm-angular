import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/books';
let headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});
const books = [
  {id: "1",image_url: "https://via.placeholder.com/150",author: "132",gender: "Ficción",author: "J K Rowling",year: "1999",title: "123"},
  {id: "2",image_url: "https://via.placeholder.com/150",author: "132",gender: "Ficción",author: "J K Rowling",year: "1999",title: "123"},
  {id: "3",image_url: "https://via.placeholder.com/150",author: "132",gender: "Ficción",author: "J K Rowling",year: "1999",title: "123"},
  {id: "4",image_url: "https://via.placeholder.com/150",author: "132",gender: "Ficción",author: "J K Rowling",year: "1999",title: "123"},
  {id: "5",image_url: "https://via.placeholder.com/150",author: "132",gender: "Ficción",author: "J K Rowling",year: "1999",title: "123"}];

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

  bringBookDetail(bookId) {
    //return this.http.get(BASE_URL+`/${bookId}`, { headers })
    return books[bookId-1];
  };
}
