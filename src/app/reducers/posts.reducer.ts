import { Post } from "../models/post.model";
import { FetchPostsHandler, PostsActionTypes } from "../actions/posts.action";

export function postsReducer(state: Array<Post> = [], action: FetchPostsHandler) {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_HANDLER: return [...action.payload]
    default: return [...state]
  }
}
