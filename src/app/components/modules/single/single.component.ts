import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/post.model";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  post: Post
  constructor() { }

  ngOnInit() {
    this.post = {
      id: 1,
      title: 'Hello World',
      subtitle: 'Hello Angular',
      content: 'Hello World',
      createdOn: 'Thu May 05 2020 19:40:18 GMT+1000 (Australian Eastern Standard Time)'
    }
  }

}
