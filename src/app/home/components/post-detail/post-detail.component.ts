import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
