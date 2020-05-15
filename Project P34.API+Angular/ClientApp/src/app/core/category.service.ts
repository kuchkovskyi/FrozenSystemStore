import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModel } from '../Models/category.model';
import { Observable } from 'rxjs';
import { ApiResult } from '../Models/result.model';
import { Category } from '../../app/Areas/admin-area/Models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'api/Category';

  addCategory(AddCategoryDTO: CategoryModel): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/addCategory', AddCategoryDTO);
  }

  getAllCategories() {
    return this.http.get(this.baseUrl);
  }

  removeCategory(id: number) {
    return this.http.post(this.baseUrl + '/RemoveCategory/' + id, id);
  }

  getCategory(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  editCategory(id: number, model: Category): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/editCategory/' + id, model);
  }

}
