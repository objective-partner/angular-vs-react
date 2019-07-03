import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from './posts-service/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.postService.getPosts().then(posts => {
      this.posts = posts;
    });
  }
}
