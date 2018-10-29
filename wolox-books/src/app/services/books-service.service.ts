import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1/books';
let headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { };

  bringAllBooks() {
    return this.http.get(BASE_URL, { headers })
  };
}
