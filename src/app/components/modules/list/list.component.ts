import { Component, OnInit } from '@angular/core';
import { Post } from "../../../models/post.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  posts: Array<Post>
  constructor() { }

  ngOnInit() {
    this.posts = [
      { id: 1, title: 'Depth First Search', content: 'Hello World', createdOn: 'Thu May 07 2020 19:40:18 GMT+1000 (Australian Eastern Standard Time)' },
      { id: 2, title: 'Width First Search', content: 'Hello World', createdOn: 'Thu May 05 2020 19:40:18 GMT+1000 (Australian Eastern Standard Time)' }
    ]
  }

}
