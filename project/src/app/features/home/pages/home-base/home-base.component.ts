import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponentimplements } from '../../components/page-base';

@Component({
  selector: "app-home-base",
  templateUrl: "./home-base.component.html",
  styleUrls: ["./home-base.component.scss"],
})
export class HomeBaseComponent extends PageBaseComponentimplements {
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

