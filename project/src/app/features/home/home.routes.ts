import { Routes } from '@angular/router';
import { HomeBaseComponent } from './pages/home-base';
import { AboutComponent } from './pages/about';
import { ProductsComponent } from './pages/products';

export const HOME_ROUTES: Routes = [
  { path: '', component: HomeBaseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
];
