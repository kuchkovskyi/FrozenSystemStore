import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Models/product.model';
import { CategoryModel } from '../Models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listOfProducts: ProductModel[] = null;
  listOfCategories: CategoryModel[] = null;

  constructor() {
    console.log(this.listOfProducts);
   }

  ngOnInit(): void {
    console.log(this.listOfProducts);

  }

}
