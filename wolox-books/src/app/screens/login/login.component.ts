import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  form:any;
  email:string = '';
  password:string = '';

  constructor(private fb: FormBuilder, private httpServ: UserService ) {

    this.signInForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  };

  submitLogin() {
    const session = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }
    this.httpServ.loginUser(session).subscribe((response) => { console.log(response); });
  };


  ngOnInit() {}

}
