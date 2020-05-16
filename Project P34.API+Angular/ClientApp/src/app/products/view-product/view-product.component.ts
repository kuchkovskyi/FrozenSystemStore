import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../Areas/admin-area/Models/product .model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) { }

    model: Product;
    productId: number;

  ngOnInit(): void {
    this.spinner.show();

    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });
    this.productService.getProduct(this.productId).subscribe((prod: Product) => {
      this.model = prod;
      this.spinner.hide();
    });
  }

}
