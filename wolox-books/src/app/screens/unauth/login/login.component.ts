import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user-service.service';

import { Validations } from '../../../utils/validations';

import { BooksComponent } from '../../../screens/auth/books/books.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  form:any;
  email:string = '';
  password:string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private validation: Validations, private router: Router) {

    this.signInForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  };

  validEmail() {
    return this.validation.validEmail(this.signInForm.value.email);
  };

  submitLogin() {
    const session = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }
    this.userService.loginUser(session);
    this.router.navigate(['books']);
  };

  ngOnInit() {};
}
