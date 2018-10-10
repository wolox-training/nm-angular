import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
const headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  posts: any;

  createUser(params) {
    this.posts = this.http.post(BASE_URL + '/users',{ headers: headers, params: params });
    return this.posts;
  };

};
