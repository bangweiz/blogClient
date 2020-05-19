import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  items: Array<{label: string, url?: string, icon: string, subLink?: Array<{label: string, url: string}> }>
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', url: '/admin/dashboard', icon: 'fa-tachometer-alt' },
      { label: 'Posts', url: '/admin/posts', icon: 'fa-sticky-note',subLink: [
          { label: 'All Posts', url: '/admin/posts/all'},
          { label: 'New Post', url: '/admin/posts/new'}
        ] },
      { label: 'Categories', url: '/admin/categories', icon: 'fa-list' },
      { label: 'Comments', url: '/admin/comments', icon: 'fa-comment' },
      { label: 'Users', url: '/admin/users', icon: 'fa-users' }
    ]
  }

}
