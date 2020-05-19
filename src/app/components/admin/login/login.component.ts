import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from '@ngrx/store';

import { LoginError, LoginSuccess } from "../../../models/auth.model";
import { UserLoginStart } from "../../../actions/auth.action";
import { AppState } from "../../../reducers/index.reducer";
import { ClearError } from "../../../actions/error.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm: FormGroup
  error: LoginError
  userInfo: LoginSuccess
  loginBtnDisabled: boolean

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.loginBtnDisabled = false
    this.signInForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
    this.store.select('auth').subscribe(userInfo => {
      this.userInfo = userInfo
      this.loginBtnDisabled = false
      if (this.userInfo.isAdmin) {
        this.router.navigate(['admin/dashboard'])
      }
    })
    this.store.select('error').subscribe(error => {
      this.error = error
      this.loginBtnDisabled = false
    })
  }

  onSubmit = (): void => {
    this.loginBtnDisabled = true
    this.error = {}
    this.store.dispatch(new UserLoginStart(this.signInForm.value))
  }

  ngOnDestroy = (): void => {
    this.store.dispatch(new ClearError())
  }

}
