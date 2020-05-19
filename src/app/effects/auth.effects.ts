import { Injectable } from "@angular/core"
import { Actions, ofType, createEffect } from "@ngrx/effects"
import { of } from "rxjs"
import { map, switchMap, catchError } from "rxjs/operators"

import { LoginService } from "../services/login.service"
import {
  AuthActionTypes,
  TokenCheck,
  UserLoginErrorHandler,
  UserLoginHandler,
  UserLoginStart
} from "../actions/auth.action"
import {LoginSuccess, LoginSuccessReturnData} from "../models/auth.model"

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.USER_LOGIN),
    switchMap((action: UserLoginStart) => {
      return this.loginService.login(action.payload).pipe(
        map((data: { data: LoginSuccessReturnData }) => {
          window.localStorage.setItem('bz-blog', data.data.token)
          const res: LoginSuccess = {
            username: data.data.username,
            email: data.data.email,
            isAdmin: data.data.isAdmin
          }
          return new UserLoginHandler(res)
        }),
        catchError(error => of(new UserLoginErrorHandler(error.error.data)))
      )
    })
  ))

  token$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.USER_TOKEN),
    switchMap((action: TokenCheck) => {
      return this.loginService.parseToken(action.payload).pipe(
        map((data: {data: LoginSuccess}) => new UserLoginHandler(data.data)),
        catchError(error => of(new UserLoginErrorHandler(error.error.data)))
      )
    })
  ))

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
