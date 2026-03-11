import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  imports: [CommonModule, ProductCard],
})
export class ProductsList {
  products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a longer card with supporting text...',
      price: 120,
      image: 'image-1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is a longer card with supporting text...',
      price: 120,
      image: 'image-2.jpg',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is a longer card with supporting text...',
      price: 120,
      image: 'image-3.jpg',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'This is a longer card with supporting text...',
      price: 120,
      image: 'image-4.jpg',
    },
  ];
}
