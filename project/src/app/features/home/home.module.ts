import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HomeService } from "./home.service";
import { HomeBaseComponent } from './pages/home-base';
import { HOME_ROUTES } from './home.routes';
import { ProductsComponent } from './pages/products';
import { AboutComponent } from './pages/about';
import { TopBarComponent } from '../components/top-bar';

@NgModule({
  declarations: [AboutComponent, HomeBaseComponent, ProductsComponent],
  imports: [CommonModule, RouterModule.forChild(HOME_ROUTES), TopBarComponent],
  providers: [HomeService]
})
export class HomeModule {}