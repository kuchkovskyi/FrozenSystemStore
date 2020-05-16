import { Component, OnInit } from '@angular/core';
import { PaymentModel } from '../../../../Models/payment.model';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-window',
  templateUrl: './payment-window.component.html',
  styleUrls: ['./payment-window.component.css']
})
export class PaymentWindowComponent implements OnInit {

  model = new PaymentModel();
  isError = false;

  constructor(
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isError = false;
  }

  OnSubmit() {
    this.spinner.show();

    if (this.model.NumberOfCard === null) {
      this.notifier.notify('error', 'Please, enter number of cart!');
      this.isError = true;
    }
    if (this.model.CVV === null) {
      this.notifier.notify('error', 'Please, enter CVV!');
      this.isError = true;
    }
    if (this.model.Month === null) {
      this.notifier.notify('error', 'Please, enter month!');
      this.isError = true;
    }
    if (this.model.Year === null) {
      this.notifier.notify('error', 'Please, enter year!');
      this.isError = true;
    }

    if (this.isError === false) {
      this.spinner.show();
      this.notifier.notify('success', 'You have successfully paid for your goods!');
      this.router.navigate(['/main-page']);
    }
  }

}
