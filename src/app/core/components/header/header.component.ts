import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { SubCategory } from '../../models/subcategory';
import { CategoryService } from '../../services/category.service';
import { SubCategoryService } from '../../services/subcategory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  category!: Observable<Category[]>;

  constructor(private router: Router, private categoryServices: CategoryService) {
    
   }

  ngOnInit(): void {
    this.getCategory();
    
  }

  getCategory(): void {
    this.category = this.categoryServices.getCategory(); 
  }
}
