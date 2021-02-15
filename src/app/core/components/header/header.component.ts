import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../entities/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[] = [];
  subCategories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.getCategories();
   }

  ngOnInit(): void {

  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data; 
      //console.log(data);
    });
  }

  filterSubById(id:any) {
    return this.categories.filter(item => item.parentId === id);
  }
}
