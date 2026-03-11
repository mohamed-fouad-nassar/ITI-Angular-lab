import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() product: any;
}
