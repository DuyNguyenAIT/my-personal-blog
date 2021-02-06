import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Category } from '../models/category';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient, private baseServices: BaseService) {
  }

  //Get data of category from server
  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseServices.baseUrl + this.baseServices.apiUrl + '/category').pipe(retry(1), catchError(this.baseServices.errorHandler))
  }
}