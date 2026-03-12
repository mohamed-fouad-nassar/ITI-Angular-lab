import { Component } from '@angular/core';
import { ProductsList } from '../../components/products-list/products-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  imports: [ProductsList],
})
export class Products {}
