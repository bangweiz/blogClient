import { Action } from '@ngrx/store'
import { Post } from "../models/post.model";

export enum PostActionTypes {
  FETCH_POST = 'FETCH_POST',
  FETCH_POST_HANDLER = 'FETCH_POST_HANDLER',
  DELETE_POST = 'DELETE-POST',
}

export class FetchPost implements Action {
  readonly type = PostActionTypes.FETCH_POST
  constructor(public payload: string) {}
}

export class FetchPostHandler implements Action {
  readonly type = PostActionTypes.FETCH_POST_HANDLER
  constructor(public payload: Post) {}
}

export class DeletePost implements Action {
  readonly type = PostActionTypes.DELETE_POST
  constructor() {}
}
