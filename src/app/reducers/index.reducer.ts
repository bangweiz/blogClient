import { ActionReducerMap } from "@ngrx/store"

import { LoginSuccess, LoginError } from "../models/auth.model"
import { Category } from "../models/category";

import { authReducer } from "./auth.reducer"
import { errorReducer } from "./error.reducer"
import { categoryReducer } from "./category.reducer";
import { postReducer } from "./post.reducer";
import { postsReducer } from "./posts.reducer";
import { Post } from "../models/post.model";

export interface AppState {
  auth: LoginSuccess
  error: LoginError
  categories: Array<Category>
  post: Post
  posts: Array<Post>
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducer,
  categories: categoryReducer,
  post: postReducer,
  posts: postsReducer
}
