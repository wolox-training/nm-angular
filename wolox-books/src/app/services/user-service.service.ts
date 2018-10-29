import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { LocalStorageService } from './local-storage.service';

const BASE_URL = 'http://localhost:3000/posts';
//const BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';
const headers = new HttpHeaders({
  'Content-Type':'application/json',
  'Accept':'application/json'
});

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { };

  createUser(user) {
    return this.http.post(BASE_URL + '/users', { ...user }, { headers });
  };

  loginUser(user) {
//    return this.http.post(BASE_URL + '/users/sessions', { ...user }, { headers }).subscribe(response => {
    return this.http.get(BASE_URL, { ...user }, { headers }).subscribe(response => {
        console.log(response);
        //this.localStorage.setValue("access_token", response["access_token"]);
        this.localStorage.setValue("access_token", response["email"]);
        this.router.navigate(['books']);
      });
  };

  logoutUser() {
    return this.localStorage.clearStorage();
  };

  loggedIn() {
    return !!this.localStorage.getValue("access_token");
  };

  getToken() {
    return this.localStorage.getValue("access_token");
  };

  checkUserState(condition, redirectionRoute) {
    if (condition) {
      return true;
    } else {
      this.router.navigate([redirectionRoute]);
      return false;
    }
  };

};
