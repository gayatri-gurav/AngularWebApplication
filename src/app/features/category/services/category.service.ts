import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-reuest.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>('http://localhost:5297/api/categories', model)

  }
}
