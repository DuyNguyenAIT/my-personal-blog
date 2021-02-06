import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Category } from '../models/category';
import { SubCategory } from '../models/subcategory';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private httpClient: HttpClient, private baseServices: BaseService) { 
    this.baseServices.apiUrl = 'api/subcategory';
  }

  getSubCategory(): Observable<SubCategory[]> {
    return this.httpClient.get<SubCategory[]>(this.baseServices.baseUrl + this.baseServices.apiUrl).pipe(retry(1), catchError(this.baseServices.errorHandler));
  }
}
