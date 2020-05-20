import { Injectable } from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {PostService} from "../services/post.service";
import {FetchPosts, FetchPostsHandler, PostsActionTypes} from "../actions/posts.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {FetchPost, FetchPostHandler, PostActionTypes} from "../actions/post.action";
import {EMPTY} from "rxjs";
import {Post} from "../models/post.model";

@Injectable()
export class PostsEffects {
  @Effect()
  fetchPosts$ = this.action$.pipe(
    ofType(PostsActionTypes.FETCH_POSTS),
    switchMap((action: FetchPosts) => {
      return this.postService.fetchPosts().pipe(
        map((data: {data: Array<Post>}) => new FetchPostsHandler(data.data)),
        catchError(err => EMPTY)
      )
    })
  )
  @Effect()
  fetchPost$ = this.action$.pipe(
    ofType(PostActionTypes.FETCH_POST),
    switchMap((action: FetchPost) => {
      return this.postService.fetchPost(action.payload).pipe(
        map((data: {data: Post}) => new FetchPostHandler(data.data)),
        catchError(err => EMPTY)
      )
    })
  )
  constructor(private action$: Actions, public postService: PostService) {}
}
