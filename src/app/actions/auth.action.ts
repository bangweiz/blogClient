import { Action } from '@ngrx/store'

import { UserLogin, LoginSuccess, LoginError } from "../models/auth.model"

export enum AuthActionTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGIN_HANDLER = 'USER_LOGIN_HANDLER',
  USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
  USER_TOKEN = 'USER_TOKEN'
}

export class UserLoginStart implements Action {
  readonly type = AuthActionTypes.USER_LOGIN
  constructor(public payload: UserLogin) {}
}

export class UserLoginHandler implements Action {
  readonly type = AuthActionTypes.USER_LOGIN_HANDLER
  constructor(public payload: LoginSuccess) {}
}

export class UserLoginErrorHandler implements Action {
  readonly type = AuthActionTypes.USER_LOGIN_ERROR
  constructor(public payload: LoginError) {}
}

export class TokenCheck implements Action {
  readonly type = AuthActionTypes.USER_TOKEN
  constructor(public payload: string) {
  }
}
