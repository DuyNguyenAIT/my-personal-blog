import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post = {
    id: 100,
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoDetails(postId: any) {
    this.router.navigate(['/post/', postId]);
  }

}
