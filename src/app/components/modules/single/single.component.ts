import { Component, OnInit } from '@angular/core';
import { Post } from "../../../models/post.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../reducers/index.reducer";
import { ActivatedRoute } from "@angular/router";
import { DeletePost, FetchPost } from "../../../actions/post.action";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  post: Post = null
  id: string
  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    if (!this.post || this.post.id !== parseInt(this.id)) {
      this.store.dispatch(new DeletePost())
      this.store.dispatch(new FetchPost(this.id))
    }
    this.store.select("post").subscribe((post: Post) => {
      this.post = post
    })
  }

}
