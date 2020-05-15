import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../Models/product.model';
import { Observable } from 'rxjs';
import { ApiResult } from '../Models/result.model';
import { Product } from '../../app/Areas/admin-area/Models/product .model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'api/Product';

  addProduct(AddProductDTO: ProductModel): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/addProduct', AddProductDTO);
  }

  getAllProducts() {
    return this.http.get(this.baseUrl);
  }

  removeProduct(id: number) {
    return this.http.post(this.baseUrl + '/RemoveProduct/' + id, id);
  }

  getProduct(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  editProduct(id: number, model: Product): Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseUrl + '/editProduct' + id, model);
  }
}
