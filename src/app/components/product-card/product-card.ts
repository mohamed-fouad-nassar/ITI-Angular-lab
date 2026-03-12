import { Component, Input } from '@angular/core';
// import { IProduct } from '../products-list/products-list';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() product: any;
}
