import { Post } from "../models/post.model";
import {DeletePost, FetchPostHandler, PostActionTypes} from "../actions/post.action";


export function postReducer(state: Post = null, action: FetchPostHandler | DeletePost) {
  switch (action.type) {
    case PostActionTypes.FETCH_POST_HANDLER: return action.payload
    case PostActionTypes.DELETE_POST: return null
    default: return state
  }
}
