import { Injectable } from '@angular/core';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Injectable({
  providedIn: 'root'
})

export class Validations {

  constructor() { };

  validEmail(emailValue) {
    return re.test(String(emailValue).toLowerCase());
  };

};
