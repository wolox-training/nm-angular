import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../services/user-service.service';

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
    return re.test(String(emailValue).toLowerCase());
  };

  equalPassword(firstPass, secPass) {
    return firstPass === secPass;
  };

  submitRegistration(form, httpServ: UserService) {
    this.firstName = form.firstName;
    this.lastName = form.lastName;
    this.email = form.email;
    this.password = form.password;
    this.passwordConfirmation = form.passwordConfirmation;

    /*const registrationRequest = {
      user: {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        locale: "en"
      }
    }*/

    const registrationRequest = {
      "user": {
        "email": "natasha.martinelli+100@wolox.com.ar",
        "password": "123123123",
        "password_confirmation": "123123123",
        "first_name": "Prueba",
        "last_name": "Usuario",
        "locale": "en"
      }
    }
    console.log(registrationRequest);
//    httpServ.createUser(registrationRequest).succes((res) => {console.log(res)});
    UserService.createUser(registrationRequest);
  };

  ngOnInit() {};
};
