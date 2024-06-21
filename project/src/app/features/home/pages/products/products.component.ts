import { Component, } from "@angular/core";
import { PageBaseComponentimplements } from '../../components/page-base';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent extends PageBaseComponentimplements {
  /**
   * Constructor del componente
   * @param route 
   * @param router 
   */
  constructor(route: ActivatedRoute, router: Router) {
    super(route, router);
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
