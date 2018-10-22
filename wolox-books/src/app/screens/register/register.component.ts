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

  constructor(private fb: FormBuilder, private userService: UserService ) {

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

  submitRegistration() {
    const registrationRequest = {
      user: {
        first_name: this.registrationForm.value.firstName,
        last_name: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        password_confirmation: this.registrationForm.value.passwordConfirmation,
        locale: "en"
      }
    }
    this.userService.createUser(registrationRequest).subscribe(() => { console.log('succes'); });
  };

  ngOnInit() {};
};
