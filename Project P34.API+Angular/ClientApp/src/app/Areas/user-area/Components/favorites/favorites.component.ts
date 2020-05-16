import { Component, OnInit } from '@angular/core';
import { Product } from '../../../admin-area/Models/product .model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  listOfProducts: Product[] = null;

  ngOnInit(): void {
  }

}
