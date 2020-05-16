import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../core/product.service';
import { CategoryService } from '../core/category.service';
import { Product } from '../Areas/admin-area/Models/product .model';
import { Category } from '../Areas/admin-area/Models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listOfProducts: Product[] = null;
  listOfCategories: Category[] = null;

  constructor(
    private categoryService: CategoryService,
    private productsService: ProductService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.productsService.getAllProducts().subscribe(
      (AllProducts: Product[]) => {
        this.listOfProducts = AllProducts;
        this.spinner.hide();
      }
    );

      this.categoryService.getAllCategories().subscribe(
        (AllCategories: Category[]) => {
          this.listOfCategories = AllCategories;
          this.spinner.hide();
        }
      );
  }

}
