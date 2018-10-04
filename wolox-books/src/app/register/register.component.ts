import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  form:any;
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';
  passwordConfirmation:string = '';

  constructor(private fb: FormBuilder) {

    this.registrationForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'passwordConfirmation': [null, Validators.required]
    });
  };

  validEmail(emailValue) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
  };

  equalPassword(firstPass, secPass) {
    return firstPass === secPass;
  };

  submitRegistration(form) {
    this.firstName = form.firstName;
    this.lastName = form.lastName;
    this.email = form.email;
    this.password = form.password;
    this.passwordConfirmation = form.passwordConfirmation;

    const registrationRequest = {
      user: {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        locale: "en"
      }
    }
    console.log(registrationRequest);
  };

  ngOnInit() {};
};
