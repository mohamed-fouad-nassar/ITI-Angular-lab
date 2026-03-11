import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Slider } from './components/slider/slider';
import { Footer } from './components/footer/footer';
import { ProductsList } from './components/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [Navbar, Slider, Footer, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lab');
}
