import { Action } from '@ngrx/store'
import { Post } from "../models/post.model";

export enum PostsActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_HANDLER = 'FETCH_POSTS_HANDLER',
}

export class FetchPosts implements Action {
  readonly type = PostsActionTypes.FETCH_POSTS
  constructor() {}
}

export class FetchPostsHandler implements Action {
  readonly type = PostsActionTypes.FETCH_POSTS_HANDLER
  constructor(public payload: Array<Post>) {}
}
