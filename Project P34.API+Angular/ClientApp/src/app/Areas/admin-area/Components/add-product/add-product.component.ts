import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../../Models/product.model';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ProductService } from '../../../../core/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  model = new ProductModel();
  isError = false;

  constructor(
    private productService: ProductService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isError = false;
  }

  OnSubmit() {
    this.spinner.show();

    if (this.model.Name === null) {
      this.notifier.notify('error', 'Please, enter name of product!');
      this.isError = true;
    }

    if (this.model.Price === null) {
      this.notifier.notify('error', 'Please, enter price of product!');
      this.isError = true;
    }

    if (this.model.Brand === null) {
      this.notifier.notify('error', 'Please, enter brand of product!');
      this.isError = true;
    }

    if (this.model.Category === null) {
      this.notifier.notify('error', 'Please, enter category of product!');
      this.isError = true;
    }

    if (this.model.Description === null) {
      this.notifier.notify('error', 'Please, enter description of product!');
      this.isError = true;
    }

    if (this.model.MainImage === null) {
      this.notifier.notify('error', 'Please, enter main image`s url of product!');
      this.isError = true;
    }

    if (this.model.Warranty === null) {
      this.notifier.notify('error', 'Please, enter warranty of product!');
      this.isError = true;
    }

    if (this.model.Payment === null) {
      this.notifier.notify('error', 'Please, enter payment of product!');
      this.isError = true;
    }

    if (this.model.FirstAdditionalImage === null) {
      this.notifier.notify('error', 'Please, enter first additional image`s url of product!');
      this.isError = true;
    }

    if (this.model.SecondAdditionalImage === null) {
      this.notifier.notify('error', 'Please, enter second additional image`s url of product!');
      this.isError = true;
    }

    if (this.model.ThirdAdditionalImage === null) {
      this.notifier.notify('error', 'Please, enter third additional image`s url of product!');
      this.isError = true;
    }

    if (this.isError === false) {
      this.productService.addProduct(this.model).subscribe(
        data => {
          console.log(data);
          if (data.status === 200) {
            this.spinner.hide();
            this.notifier.notify('success', 'Product is added!');
            this.router.navigate(['admin-panel/products-list-view']);
          } else {
            console.log(data.errors);
            for (let i = 0; i < data.errors.length; i++) {
              this.notifier.notify('error', data.errors[i]);
            }
            setTimeout(() => {
              this.spinner.hide();
            }, 2500);
          }
        },
        errors => {
          console.log(errors);
        });
    } else {
      setTimeout(() => {
        this.spinner.hide();
        this.isError = false;
      }, 2500);
    }
  }

}
