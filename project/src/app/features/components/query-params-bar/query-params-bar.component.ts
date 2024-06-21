import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: "app-query-params-bar",
  templateUrl: "./query-params-bar.component.html",
  styleUrls: ["./query-params-bar.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class QueryParamsBarComponent implements OnDestroy{
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}