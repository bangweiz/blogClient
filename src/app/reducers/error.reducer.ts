import { LoginError } from "../models/auth.model"
import { AuthActionTypes, UserLoginErrorHandler } from "../actions/auth.action"
import {ClearError, ErrorActionTypes} from "../actions/error.action";

const initialState: LoginError = { message: '', password: '', email: '' }

export function errorReducer(state = initialState, action: UserLoginErrorHandler | ClearError) {
  switch (action.type) {
    case AuthActionTypes.USER_LOGIN_ERROR: return { ...action.payload }
    case ErrorActionTypes.CLEAR_ERROR: return { ...initialState }
    default: return state
  }
}
