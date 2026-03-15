import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: IProduct[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is a longer card with supporting text...',
      price: 80,
      image: 'image-1.jpg',
      inStock: true,
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is a longer card with supporting text...',
      price: 90,
      image: 'image-2.jpg',
      inStock: false,
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is a longer card with supporting text...',
      price: 100,
      image: 'image-3.jpg',
      inStock: true,
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'This is a longer card with supporting text...',
      price: 120,
      image: 'image-4.jpg',
      inStock: true,
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'This is a longer card with supporting text...',
      price: 90,
      image: 'image-1.jpg',
      inStock: true,
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'This is a longer card with supporting text...',
      price: 80,
      image: 'image-2.jpg',
      inStock: true,
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'This is a longer card with supporting text...',
      price: 240,
      image: 'image-3.jpg',
      inStock: true,
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'This is a longer card with supporting text...',
      price: 140,
      image: 'image-4.jpg',
      inStock: false,
    },
  ];
}
