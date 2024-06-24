import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: "app-fragment-bar",
  templateUrl: "./fragment-bar.component.html",
  styleUrls: ["./fragment-bar.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink]
})
export class FragmentBarComponent implements OnDestroy{
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  f_custom1 = '?utm_source=hola#?t=1000&prefill=e30';
  f_custom2 = '?t=1000&prefill=e30';
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}