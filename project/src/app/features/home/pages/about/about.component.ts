import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import { PageBaseComponentimplements } from '../../components/page-base';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent extends PageBaseComponentimplements {
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
