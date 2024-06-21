import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnDestroy{
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