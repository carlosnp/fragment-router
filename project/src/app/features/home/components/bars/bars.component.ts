import { Component, Input, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from '../../../components';
import { QueryParamsBarComponent } from '../../../components/query-params-bar';
import { FragmentBarComponent } from '../../../components/fragment-bar';
import { Subject } from 'rxjs';

@Component({
  selector: "app-bars",
  templateUrl: "./bars.component.html",
  styleUrls: ["./bars.component.scss"],
  standalone: true,
  imports: [CommonModule, TopBarComponent, QueryParamsBarComponent, FragmentBarComponent]
})
export class BarsComponent implements OnDestroy{
  /**
   * Component destroyed stream
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  /**
   * query Params
   */
  @Input()
  queryParams: {[key: string]: any} = {};
  /**
   * fragments
   */
  @Input()
  fragments: {[key: string]: any} = {};
  constructor() {}
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
