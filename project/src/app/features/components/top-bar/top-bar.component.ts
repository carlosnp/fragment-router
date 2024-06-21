import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TopBarComponent implements OnDestroy{
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
