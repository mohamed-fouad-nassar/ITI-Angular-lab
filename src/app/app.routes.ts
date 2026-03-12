import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' },
];
