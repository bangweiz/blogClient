import { ActionReducerMap } from "@ngrx/store"

import { LoginSuccess, LoginError } from "../models/auth.model"
import { Category } from "../models/category";

import { authReducer } from "./auth.reducer"
import { errorReducer } from "./error.reducer"
import { categoryReducer } from "./category.reducer";

export interface AppState {
  auth: LoginSuccess,
  error: LoginError
  categories: Array<Category>
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducer,
  categories: categoryReducer
}
