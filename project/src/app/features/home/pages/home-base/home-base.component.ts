import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from 'rxjs';

@Component({
  selector: "app-home-base",
  templateUrl: "./home-base.component.html",
  styleUrls: ["./home-base.component.scss"],
})
export class HomeBaseComponent implements OnDestroy{
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

