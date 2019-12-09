import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SigninServiceService} from './signin-service.service';
import { User } from '../all';
import { stringify } from 'querystring';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  validateForm: FormGroup;
  user: User = {
    Username: '',
    Password: '',
  };

  isuser: User  = {
    Username: '',
    Password: '',
  };
  isLogin: boolean;

  submitForm(): void {

    this.user.Username = this.validateForm.value.username;
    this.user.Password = this.validateForm.value.password;
    console.log(this.user);
    this.signinserve.login(this.user).subscribe(
      u =>  {
        if (u.Username !== '') {
          this.isLogin = true;
          this.isuser.Username = u.Username;
        }
      }
    );

  }

  constructor(private fb: FormBuilder, private signinserve: SigninServiceService ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
