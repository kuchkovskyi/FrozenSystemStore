import { Component, OnInit } from '@angular/core';
import { Product } from '../../../admin-area/Models/product .model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  listOfProducts: Product[] = null;

  ngOnInit(): void {
  }

}
