import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(private pstServ : PostService) { }

  ngOnInit() {
    this.pstServ.getUserPost()
      .subscribe(data => this.posts = data)
  }

}
