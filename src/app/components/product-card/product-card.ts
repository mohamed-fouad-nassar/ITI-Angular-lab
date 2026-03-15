import { IProduct } from '../../models/product';
import { Component, Input } from '@angular/core';
import { ReusableProductCard } from '../reusable-product-card/reusable-product-card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  imports: [ReusableProductCard],
})
export class ProductCard {
  @Input() product!: IProduct;
}
