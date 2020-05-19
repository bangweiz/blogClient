import { LoginSuccess } from "../models/auth.model"
import { AuthActionTypes, UserLoginHandler } from "../actions/auth.action"

// TODO: change isAdmin to false later on
const initialState: LoginSuccess = { username: '', email: '', isAdmin: false }

export function authReducer(state = initialState, action: UserLoginHandler) {
  switch (action.type) {
    case AuthActionTypes.USER_LOGIN_HANDLER: return { ...action.payload }
    default: return state
  }
}
