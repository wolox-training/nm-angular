import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';

const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
let headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { };

  createUser(user) {
    return this.http.post(BASE_URL + '/users', { ...user }, { headers });
  };

  loginUser(user) {
    return this.http.post(BASE_URL + '/users/sessions', { ...user }, { headers }).subscribe(response => {
        //headers.append('access_token', response.access_token);
        this.localStorage.setValue("access_token", response.access_token);
      });
  };

  logoutUser() {
    return this.localStorage.clearStorage();
  };

};
