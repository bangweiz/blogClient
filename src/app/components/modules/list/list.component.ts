import { Component, OnInit } from '@angular/core';
import { Post } from "../../../models/post.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../../reducers/index.reducer";
import {FetchPosts} from "../../../actions/posts.action";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Array<Post> = []
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    if (!this.posts.length) {
      this.store.dispatch(new FetchPosts())
    }
    this.store.select("posts").subscribe((posts: Array<Post>) => {
      this.posts = posts
    })
  }
}
