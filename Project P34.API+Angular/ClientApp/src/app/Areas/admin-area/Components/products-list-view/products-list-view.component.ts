import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product .model';
import { ProductService } from '../../../../core/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { ApiResult } from '../../../../Models/result.model';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.css']
})
export class ProductsListViewComponent implements OnInit {

  listOfData: Product[] = [];

  searchProduct: string;
  searchResult: Product[] = [];

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService
  ) { }

  ngOnInit(): void {
    this.spinner.show();

    this.productService.getAllProducts().subscribe((AllProducts: Product[]) => {
        this.listOfData = AllProducts;
        console.log(this.listOfData);
        this.searchResult = AllProducts;
        this.spinner.hide();
      }
    );
  }

  deleteProduct(id: number) {
    this.spinner.show();

    this.productService.removeProduct(id).subscribe(
      (data: ApiResult) => {
        if (data.status === 200) {
          this.notifier.notify('success', 'Conglaturations! Product removed :)');
          this.listOfData = this.listOfData.filter(t => t.id !== id);
          this.searchResult = this.searchResult.filter(t => t.id !== id);
          console.log(data);
          this.spinner.hide();
        } else {
          for (let i = 0; i < data.errors; i++) {
            this.notifier.notify('error', data.errors[i]);
            this.spinner.hide();
          }
        }
      }
    );
  }

  SearchProduct() {
    this.searchResult = this.listOfData.filter(
      t => t.name.includes(this.searchProduct)
      );
    }

}
