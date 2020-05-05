import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Models/product.model';
import { CategoryModel } from '../Models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listOfProducts: ProductModel[] = [];
  listOfCategories: CategoryModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
