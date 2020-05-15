import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/product.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../Models/product .model';
import { ApiResult } from '../../../../Models/result.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  model: Product;
  productId: number;
  isError: boolean;

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

  submitForm() {
    if (this.model.name === null) {
      this.notifier.notify('error', 'Please, enter product`s name!');
      this.isError = true;
    }
    if (this.model.price === null) {
      this.notifier.notify('error', 'Please, enter product`s price!');
      this.isError = true;
    }
    if (this.model.brand === null) {
      this.notifier.notify('error', 'Please, enter product`s brand!');
      this.isError = true;
    }
    if (this.model.category === null) {
      this.notifier.notify('error', 'Please, enter product`s category!');
      this.isError = true;
    }
    if (this.model.description === null) {
      this.notifier.notify('error', 'Please, enter product`s descripion!');
      this.isError = true;
    }
    if (this.model.mainImage === null) {
      this.notifier.notify('error', 'Please, enter url of product`s image!');
      this.isError = true;
    }
    if (this.model.warranty === null) {
      this.notifier.notify('error', 'Please, enter product`s warranty!');
      this.isError = true;
    }
    if (this.model.payment === null) {
      this.notifier.notify('error', 'Please, enter payment methods!');
      this.isError = true;
    }
    if (this.model.firstAdditionalImage === null) {
      this.notifier.notify('error', 'Please, enter url of first additional product`s image!');
      this.isError = true;
    }
    if (this.model.secondAdditionalImage === null) {
      this.notifier.notify('error', 'Please, enter url of second additional product`s image!');
      this.isError = true;
    }
    if (this.model.thirdAdditionalImage === null) {
      this.notifier.notify('error', 'Please, enter url of third additional product`s image!');
      this.isError = true;
    }

    if (this.isError === false) {
      this.spinner.show();
      this.productService.editProduct(this.productId, this.model).subscribe(
        (data: ApiResult) => {
          if (data.status === 200) {
            this.notifier.notify('success', 'Product edited successfully!');
            this.router.navigate(['/admin-panel/products-list-view']);
          }
        },
        (error) => {
          this.notifier.notify('error', 'ERROR!!!');
        }
      );
    }
  }
}
