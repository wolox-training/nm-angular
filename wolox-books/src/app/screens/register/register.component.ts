import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { Validations } from '../../utils/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  form:any;
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';
  passwordConfirmation:string = '';

  constructor(private fb: FormBuilder, private httpServ: UserService, private validation: Validations ) {
    this.registrationForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'passwordConfirmation': [null, Validators.required]
    });
  };

  validEmail() {
    return this.validation.validEmail(this.registrationForm.value.email);
  };

  equalPassword() {
    return this.registrationForm.value.password === this.registrationForm.value.passwordConfirmation;
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
    this.httpServ.createUser(registrationRequest).subscribe(() => { console.log('succes'); });
  };

  ngOnInit() {};
};
