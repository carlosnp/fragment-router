import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject } from 'rxjs';

@Component({
  selector: "app-fragment-bar",
  templateUrl: "./fragment-bar.component.html",
  styleUrls: ["./fragment-bar.component.scss"],
  standalone: true,
  imports: [CommonModule]
})
export class FragmentBarComponent implements OnDestroy{
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