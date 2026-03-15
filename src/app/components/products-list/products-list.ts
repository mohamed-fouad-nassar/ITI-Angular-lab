import { IProduct } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.html',
  imports: [ProductCard],
})
export class ProductsList implements OnInit, AfterViewInit, OnDestroy {
  products: IProduct[] = [];

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.products = this.ProductService.products;
    console.log('Products fetched');
  }

  ngAfterViewInit(): void {
    console.log('View Loaded');
  }

  ngOnDestroy(): void {
    console.log('ProductCard destroyed');
  }
}
